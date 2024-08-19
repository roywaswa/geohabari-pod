// import { sendStatusCode } from "next/dist/server/api-utils";
import { headers } from "next/headers";
import { NextResponse } from "next/server";


const BASE_URL = process.env.BUZZSPROUT_BASE_URL
const PODCAST_ID = process.env.BUZZSPROUT_PODCAST_IDENTIFIER
const API_TOKEN = process.env.BUZZSPROUT_API_TOKEN


export async function GET() {
  const url = `${BASE_URL}/${PODCAST_ID}/episodes.json`
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "charset":"utf-8",
      "Authorization": `Token token=${API_TOKEN}`
    }
  })

  let data  = await response.json()
  
  return NextResponse.json({
    "status-code": response.status,
    "data": data
  })
}



