import { ChatGPT } from "chatgpt-official";
import { Configuration, OpenAIApi } from "openai";
import config from "../config";

<<<<<<< HEAD
// ChatGPT Client (text-davinci-003)
export const chatgpt = new ChatGPTAPI({
	apiKey: config.openAIAPIKey
});
=======
let options = {
	temperature: 0.7, // OpenAI parameter
	max_tokens: config.maxModelTokens, // OpenAI parameter [Max response size by tokens]
	top_p: 0.9, // OpenAI parameter
	frequency_penalty: 0, // OpenAI parameter
	presence_penalty: 0, // OpenAI parameter
	// instructions: ``,
	model: "gpt-3.5-turbo", // OpenAI parameter  `gpt-3.5-turbo` is PAID
};

export const chatgpt = new ChatGPT(config.openAIAPIKey, options); // Note: options is optional
>>>>>>> 87bde87de984415f3ce26dcefc943935361cae10

// OpenAI Client (DALL-E)
export const openai = new OpenAIApi(
	new Configuration({
		apiKey: config.openAIAPIKey
	})
);
