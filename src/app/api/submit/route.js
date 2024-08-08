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

  let options = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    }
  }
  try {
    await fetch(url, {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify(data)
    })
    return sendStatusCode(
      NextResponse.json({message:"Success"}),201
    )
  } catch (error) {
    console.log(error)
    return sendStatusCode(
      NextResponse.json({message:error}), 500
    )
  }
}

