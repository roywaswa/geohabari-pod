
export async function getEpisodes() {
  const base_url = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_NET_URL || "https://geohabari.com" || "preview.geohabari.com";
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


export const topics = [
  {
    title: "Tech",
    subtitle: "Highlighting Africa's Tech Innovators",
    description: "Discover African organizations leading in geo-enabling and other cutting-edge technologies. We dive into the systems' components, from programming languages to seamless integrations, showcasing impactful use cases across the continent."
  },
  {
    title: "Geo-Banter",
    subtitle: "Your Ultimate Tech Therapy Sessions",
    description: "Blend technical expertise with humor to humanize experiences in the tech world. Ideal for those looking for a light-hearted, tech-centric laugh."
  },
  {
    title: "Earth",
    subtitle: "Exploring EO Applications",
    description: "Dive into Earth Observation (EO) use cases across various sectors. From technical tools and datasets to real-world applications and impacts, each episode offers a comprehensive look at EO’s potential."
  },
  {
    title: "Action",
    subtitle: "Tech Making a Difference",
    description: "Explore how tech is used across Africa to drive change. Highlighting limitless possibilities, we showcase how GIS is leveraged for impactful solutions in different industries."
  },
  {
    title: "Career",
    subtitle: "Geospatial Career Journeys",
    description: "Navigate diverse career paths in the geospatial industry. Discussing pivotal moments, key learnings, and challenges, these episodes inspire you to explore new career horizons."
  },
  {
    title: "Scholarships",
    subtitle: "Your Study Abroad Guide",
    description: "Scholarship recipients share their application tips and tricks, covering everything from requirements to living abroad. The ultimate starter pack for geospatial students looking to study overseas."
  }
];
