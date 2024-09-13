
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

