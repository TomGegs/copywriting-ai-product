// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { configuration } from "../utils/constants";
const { OpenAIApi } = require("openai");

type Data = {
    input: string;
};

//communicate with openAi Platform
const openai = new OpenAIApi(configuration);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    //user input state (body)
    const { input } = req.body;

    //openAi prompt
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `You are a marketing expert and professional copywriter. The following information was provided by the business and gives a brief description of what that they need marketing copy for: "${input}".`,
        temperature: 0.85,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    //suggestion from openAi
    const suggestion = response.data?.choices?.[0].text;

    //error handling
    if (suggestion === undefined) {
        throw new Error("No suggestion found");
    }

    //api call
    res.status(200).json({ result: suggestion });
}
