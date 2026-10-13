import { callOpenAI } from "@/lib/openai.mjs";
   
export async function POST(req: Request) {
     console.log("in API route");
 // const { prompt } = await req.json();      // read what the browser sent
  const reply = await callOpenAI();   // runs on the server, so the key works
  return Response.json({ reply });          // send back only the reply
}