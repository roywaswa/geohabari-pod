// import { sendStatusCode } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

const BASE_URL = process.env.BUZZSPROUT_BASE_URL;
const PODCAST_ID = process.env.BUZZSPROUT_PODCAST_IDENTIFIER;
const API_TOKEN = process.env.BUZZSPROUT_API_TOKEN;
const REVALIDATE_SECONDS = 60 * 10; // 10 minutes cache

export async function GET() {
  const url = `${BASE_URL}/${PODCAST_ID}/episodes.json`;
  
  try {
    const response = await fetch(url, {
      headers: {
        "Authorization": `Token token=${API_TOKEN}`
      },
      next: { revalidate: REVALIDATE_SECONDS }
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch episodes" }, { status: 500 });
    }

    const fullData = await response.json();
    
    // Strip down to needed fields
    const trimmed = fullData.map(ep => ({
      id: ep.id,
      title: ep.title,
      description: ep.description,
      artwork_url: ep.artwork_url,
      episode_number: ep.episode_number,
      season_number: ep.season_number,
      tags: ep.tags,
      audio_url: ep.audio_url,
      published_at: ep.published_at,
    }));

    return NextResponse.json({ episodes: trimmed }, {
      status: 200
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// {
//     "id": 17265788,
//     "title": "S2E6: The Space Ecosystem Playbook : Panafricanism and the Evolving Technology Landscape in Africa",
//     "audio_url": "https://www.buzzsprout.com/2331312/episodes/17265788-s2e6-the-space-ecosystem-playbook-panafricanism-and-the-evolving-technology-landscape-in-africa.mp3",
//     "artwork_url": "https://storage.buzzsprout.com/pu4009yqz7hof5dhunrv93ll97wb",
//     "description": "<p>In this episode, Charles Mwangi hosts three true Pan-Africanists 🙂:</p><ul><li><b>Ben Roberts</b>, Principal Advisor – Digital Economy Advisors</li><li><b>Buntu Majaja</b>, CEO – SA Innovation Summit</li><li><b>Sylvia Makario</b>, Managing Director – Identic Foundation</li></ul><p>(Also… how many times did we mention <em>Pan-Africanism</em>? You’ll have to listen and count!)</p><p>The conversation explores the importance of <b>cross-boundary collaborations</b> across the continent and the need to build strong foundational systems — from infrastructure to policy — that support talent growth and innovation. We also touch on the increasingly critical role of <b>IP ownership</b> in today’s tech-driven world.</p><p>We take a closer look at <b>South Africa’s automotive industry</b>, unpacking how it created a successful manufacturing supply chain that now extends into the <b>space ecosystem</b>, with local companies contributing to global satellite components. Lots of lessons here on building not just for the <b>downstream</b>, but also the <b>upstream</b> — including opportunities in <b>LEO satellites</b> and more.</p><p>Finally, we dive into the evolution of <b>Africa’s startup ecosystem</b>, comparing the pre- and post-COVID landscapes — from the fintech surge that laid foundational tech infrastructure, to today’s more mature, sustainability-focused investor climate (and a shift away from “spray and pray”).</p>",
//     "summary": null,
//     "artist": "Geohabari Pod",
//     "tags": "",
//     "published_at": "2025-06-02T06:00:00.000-04:00",
//     "duration": 3455,
//     "hq": false,
//     "magic_mastering": false,
//     "guid": "Buzzsprout-17265788",
//     "inactive_at": null,
//     "custom_url": "",
//     "episode_number": 6,
//     "season_number": 2,
//     "episode_type": "full",
//     "explicit": false,
//     "private": false,
//     "total_plays": 12
// }