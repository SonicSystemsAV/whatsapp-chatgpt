import process from "process";

// Environment variables
import dotenv from "dotenv";
dotenv.config();

// Config Interface
interface IConfig {
	// OpenAI
	openAIAPIKey: string;
<<<<<<< HEAD
=======
	maxModelTokens: number;
	prePrompt: string | undefined;
>>>>>>> 87bde87de984415f3ce26dcefc943935361cae10

	// Prefix
	prefixEnabled: boolean;
	gptPrefix: string;
	dallePrefix: string;
	resetPrefix: string;
	aiConfigPrefix: string;
}

// Config
const config: IConfig = {
	openAIAPIKey: process.env.OPENAI_API_KEY || "", // Default: ""
<<<<<<< HEAD
=======
	maxModelTokens: getEnvMaxModelTokens(), // Default: 4096
	prePrompt: process.env.PRE_PROMPT, // Default: undefined
>>>>>>> 87bde87de984415f3ce26dcefc943935361cae10

	// Prefix
	prefixEnabled: getEnvBooleanWithDefault("PREFIX_ENABLED", true), // Default: true
	gptPrefix: process.env.GPT_PREFIX || "!gpt", // Default: !gpt
	dallePrefix: process.env.DALLE_PREFIX || "!dalle", // Default: !dalle
<<<<<<< HEAD
	aiConfigPrefix: process.env.AI_CONFIG_PREFIX || "!config" // Default: !config
=======
	resetPrefix: process.env.RESET_PREFIX || "!reset", // Default: !reset
	aiConfigPrefix: process.env.AI_CONFIG_PREFIX || "!config", // Default: !config

	// Speech API, Default: https://speech-service.verlekar.com
	speechServerUrl: process.env.SPEECH_API_URL || "https://speech-service.verlekar.com",

	// Text-to-Speech
	ttsEnabled: getEnvBooleanWithDefault("TTS_ENABLED", false), // Default: false

	// Transcription
	transcriptionEnabled: getEnvBooleanWithDefault("TRANSCRIPTION_ENABLED", false), // Default: false
	transcriptionMode: getEnvTranscriptionMode() // Default: local
>>>>>>> 87bde87de984415f3ce26dcefc943935361cae10
};

function getEnvBooleanWithDefault(key: string, defaultValue: boolean): boolean {
	if (process.env[key] == undefined || process.env[key] == "") {
		return defaultValue;
	}
	return process.env[key] == "true";
}

export default config;
