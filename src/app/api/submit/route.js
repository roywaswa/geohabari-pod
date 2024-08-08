import { sendStatusCode } from "next/dist/server/api-utils";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const API_KEY = process.env.MAILERLITE_DEV_API_KEY
const BASE_URL = process.env.MAILERLITE_DEV_BASE_URL
const GROUP_ID = process.env.MAILERLITE_DEV_GROUP_ID



export async function GET() {
  return NextResponse.json({
    hello:"world"
  })
}

export async function POST(request) {
  let {email, name} = await request.json()
  let url = `${BASE_URL}/subscribers`

  const data = {
    email: email,
    fields: {
      name: name,
    },
    groups: [`${GROUP_ID}`],
  };
  let response = await fetch(url, {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify(data)
  })
  response.json().then(res => {
    return sendStatusCode(
      NextResponse.json({message:"Success"}),201
    )
  }).catch(err => {
    console.log(err)
    return sendStatusCode(
      NextResponse.json({message:err}), 500
    )
  })
}

