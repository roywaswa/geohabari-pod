// src/lib/buzzsprout.js

class BuzzsproutAPI {
  constructor(podcastId, apiToken) {
    this.podcastId = podcastId;
    this.apiToken = apiToken;
    this.baseUrl = `https://www.buzzsprout.com/api/${podcastId}`;
    
    // Simple cache to avoid repeated API calls
    this.cache = {
      episodes: null,
      timestamp: 0,
      ttl: 5 * 60 * 1000 // 5 minutes
    };
  }

  /**
   * Check if cache is still valid
   */
  isCacheValid() {
    return this.cache.episodes && (Date.now() - this.cache.timestamp < this.cache.ttl);
  }

  /**
   * Get all episodes from Buzzsprout API with caching
   */
  async getAllEpisodes(forceRefresh = false) {
    if (!forceRefresh && this.isCacheValid()) {
      return this.cache.episodes;
    }

    const url = `${this.baseUrl}/episodes.json`;
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Token token=${this.apiToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Buzzsprout API error: ${response.status} ${response.statusText}`);
      }

      const episodes = await response.json();
      
      // Cache the data
      this.cache.episodes = episodes;
      this.cache.timestamp = Date.now();
      
      return episodes;
      
    } catch (error) {
      console.error('Error fetching episodes:', error);
      
      // Return stale cache if available
      if (this.cache.episodes) {
        return this.cache.episodes;
      }
      
      throw error;
    }
  }

  /**
   * Get the most recent episodes
   */
  async getRecentEpisodes(count = 5) {
    const allEpisodes = await this.getAllEpisodes();
    
    return allEpisodes
      .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
      .slice(0, count);
  }

  /**
   * Get a specific episode by ID
   */
  async getEpisode(episodeId) {
    const episodes = await this.getAllEpisodes();
    const episode = episodes.find(ep => ep.id === episodeId || ep.id === parseInt(episodeId));
    
    if (!episode) {
      throw new Error(`Episode with ID ${episodeId} not found`);
    }
    
    return episode;
  }

  /**
   * Search episodes by title or description
   */
  async searchEpisodes(searchTerm) {
    const episodes = await this.getAllEpisodes();
    const term = searchTerm.toLowerCase();
    
    return episodes
      .filter(episode => 
        episode.title.toLowerCase().includes(term) ||
        (episode.description && episode.description.toLowerCase().includes(term)) ||
        (episode.summary && episode.summary.toLowerCase().includes(term))
      )
      .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
  }

  /**
   * Get all episodes grouped by season
   */
  async getEpisodesBySeason() {
    const episodes = await this.getAllEpisodes();
    const grouped = {};
    
    // Group episodes by season
    episodes.forEach(episode => {
      const season = episode.season_number || 'No Season';
      if (!grouped[season]) {
        grouped[season] = [];
      }
      grouped[season].push(episode);
    });
    
    // Sort episodes within each season by episode number, then by date
    Object.keys(grouped).forEach(season => {
      grouped[season].sort((a, b) => {
        // First sort by episode number if available
        if (a.episode_number && b.episode_number) {
          return a.episode_number - b.episode_number;
        }
        // Fallback to date sorting (newest first)
        return new Date(b.published_at) - new Date(a.published_at);
      });
    });
    
    return grouped;
  }

  /**
   * Get episodes from a specific season
   */
  async getEpisodesBySeason(seasonNumber) {
    const allSeasons = await this.getEpisodesBySeason();
    
    if (seasonNumber) {
      return allSeasons[seasonNumber] || [];
    }
    
    return allSeasons;
  }

  /**
   * Get list of all available seasons
   */
  async getSeasonList() {
    const episodes = await this.getAllEpisodes();
    const seasons = [...new Set(episodes.map(ep => ep.season_number).filter(Boolean))];
    
    // Sort seasons numerically
    seasons.sort((a, b) => a - b);
    
    // Add episode counts for each season
    return seasons.map(seasonNum => {
      const episodeCount = episodes.filter(ep => ep.season_number === seasonNum).length;
      return {
        season: seasonNum,
        episodeCount
      };
    });
  }

  /**
   * Format duration from seconds to MM:SS or HH:MM:SS
   */
  formatDuration(seconds) {
    if (!seconds) return '0:00';
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}

// Create client instance
export function createBuzzsproutClient(podcastId, apiToken) {
  return new BuzzsproutAPI(podcastId, apiToken);
}

// Default client using environment variables
let defaultClient = null;

export function getDefaultClient() {
  if (!defaultClient) {
    const podcastId = import.meta.env.BUZZSPROUT_PODCAST_IDENTIFIER;
    const apiToken = import.meta.env.BUZZSPROUT_API_TOKEN;
    
    if (!podcastId || !apiToken) {
      throw new Error('Missing BUZZSPROUT_PODCAST_ID or BUZZSPROUT_API_TOKEN in environment variables');
    }
    
    defaultClient = new BuzzsproutAPI(podcastId, apiToken);
  }
  
  return defaultClient;
}

// Simple convenience functions
export async function getAllEpisodes(forceRefresh = false) {
  return getDefaultClient().getAllEpisodes(forceRefresh);
}

export async function getRecentEpisodes(count = 5) {
  return getDefaultClient().getRecentEpisodes(count);
}

export async function getEpisode(episodeId) {
  return getDefaultClient().getEpisode(episodeId);
}

export async function searchEpisodes(searchTerm) {
  return getDefaultClient().searchEpisodes(searchTerm);
}

export async function getEpisodesPaginated(page = 1, perPage = 10) {
  return getDefaultClient().getEpisodesPaginated(page, perPage);
}