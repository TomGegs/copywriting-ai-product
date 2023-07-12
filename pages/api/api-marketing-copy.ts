// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { configuration } from "../../utils/constants";
const { OpenAIApi } = require("openai");

type Data = {
    description: string;
};

//communicate with openAi Platform
const openai = new OpenAIApi(configuration);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    //user input state (body)
    const { description } = req.body;

    try {
        // OpenAI prompt
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `You are a marketing expert and professional copywriter. The following information was provided by the business and gives a brief description of what they need marketing copy for: "${description}".`,
            temperature: 0.85,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        // Extract the suggestion from the response
        const suggestion = response.data.choices[0].text;

        if (suggestion === undefined) {
            throw new Error("No suggestion found");
        }

        // API call
        res.status(200).json({ description: suggestion });
    } catch (error) {
        console.log(error);
        res.status(500).json({ description: "Internal Server Error" });
    }
}
