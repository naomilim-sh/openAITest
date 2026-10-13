import OpenAI from "openai";
export async function callOpenAI() {

   const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});
const response = await client.responses.create({
  model: "gpt-6-astra",
  input: "Write a one-sentence bedtime story about a unicorn.",
});
console.log("response", response.output_text)
return response.output_text;

}
