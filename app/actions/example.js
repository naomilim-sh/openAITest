"use server"
import OpenAI from "openai";

console.log(process.env.OPENAI_API_KEY)
export async function Hi() {
    const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});
const response = await client.responses.create({
  model: "gpt-6-astra",
  input: "Write a one-sentence bedtime story about a unicorn.",
});

  return (
response.output_text

 //  console.log("Hi")
  );
}