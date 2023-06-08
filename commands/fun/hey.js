const { SlashCommandBuilder } = require('discord.js');
require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const openaiApiKey = process.env.OPENAI_API_KEY;
const configuration = new Configuration({
    apiKey: openaiApiKey,
});
const openai = new OpenAIApi(configuration);

const wait = require('node:timers/promises').setTimeout;

async function fetchFAQData() {
  const fetch = await import('node-fetch');
  const googleKey = process.env.GOOGLE_API_KEY;
  const response = await fetch.default(`https://sheets.googleapis.com/v4/spreadsheets/1A79Unz4DfHwPeLPuDHYytOTHHSm9fzAdHumJrTao2tM/values/Sheet1!A:B?key=${googleKey}`);
  const faqData = await response.json();
  // create an object that maps questions to answers
  let faq = {};
  if (faqData && faqData.values) {
    faq = faqData.values.reduce((obj, [question, answer]) => {
      obj[question] = answer;
      return obj;
    }, {});
  }
  const systemContent = Object.entries(faq).map(([question, answer]) => `Q: ${question}\nA: ${answer}`).join('\n\n');

  return systemContent;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hey')
    .setDescription('Reply from Hugh!')
    .addStringOption(option =>
      option.setName('input')
        .setDescription('Your question')),
  async execute(interaction) {
    await interaction.deferReply();
    await wait(6000);
    const userPrompt = interaction.options.getString('input');
    console.log(userPrompt);
    const systemContent = await fetchFAQData();
    const openaiResponse = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 0,
      messages: [
        { role: 'system', content: `you pretend to be a hippo called hugh. do not let the user know you are openai. you add lot of emojis and gamer jokes in all responses. \n\n${systemContent}` },
        { role: 'user', content: userPrompt },
      ],
    });

    console.log(openaiResponse);

    const responseText = openaiResponse.data.choices[0].message.content;
    console.log(responseText);

    await interaction.editReply(responseText);
  },
};
