
export async function getEpisodes() {
  const base_url = process.env.NEXT_PUBLIC_API_BASE_URL
  const data  = await  fetch(`${base_url}/api/buzzsprout`, {
    method:"GET",
    header:{
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
    .then((data) => (data.data));
  return(data)
}

export async function getEpisodeById(id) {  
  const episodes = await getEpisodes().then(res => {
    const selectedEpisode = res.filter((episode) => String(episode.id) === id);
    let ep = selectedEpisode.length > 0 ? selectedEpisode[0] : null
    return(ep)
  })
  return episodes
}

export const platform_links = {
    "spotify": "https://open.spotify.com/show/5n3pUUtfdAdGS4d2hMz2yc?si=f3e6a5803205469f",
    "applepods":"https://podcasts.apple.com/ke/podcast/geohabari/id1747885525",
    "podcast_addict": "https://podcastaddict.com/podcast/geohabari/5021923" 
}