import { Configuration } from "openai";

const configuration = new Configuration({
    organization: "org-A7fKbkj4Fgp4Hf8aSRCuzNe0",
    apiKey: process.env.OPENAI_API_KEY,
});
export default configuration;
