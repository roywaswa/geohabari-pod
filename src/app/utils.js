
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
  const episodes = await getEpisodes();  
  const selectedEpisode = episodes.filter((episode) => String(episode.id) === id);
  return selectedEpisode.length > 0 ? selectedEpisode[0] : null;
}

