const axios = require('axios');
const openaiApiKey = process.env.OPENAI_API_KEY;

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer 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`
};

const prompt = 'Hello, how are you?';
const model = 'text-davinci-002';

axios.post('https://api.openai.com/v1/completions', {
  prompt,
  model,
  max_tokens: 5
}, { headers })
  .then(response => console.log(response.data.choices[0].text))
  .catch(error => console.error(error));
