const { SlashCommandBuilder } = require('discord.js');
require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const openaiApiKey = process.env.OPENAI_API_KEY;
const configuration = new Configuration({
    apiKey: openaiApiKey,
});
const openai = new OpenAIApi(configuration);

const wait = require('node:timers/promises').setTimeout;


module.exports = {
	data: new SlashCommandBuilder()
		.setName('hey')
		.setDescription('Reply from Hank!')
		.addStringOption(option => 
			option.setName('input')
				.setDescription('Your question')),
	async execute(interaction) {
		await interaction.deferReply();
		await wait(9000);
		const userPrompt = interaction.options.getString('input');
		console.log(userPrompt)
		const openaiResponse = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			temperature: 0,
			messages: [
				{ role: 'system', content: 'can you pretend to be a hippo called hugh.' },
				{ role: 'user', content: userPrompt },
			],
		});

		console.log(openaiResponse)

		const responseText = openaiResponse.data.choices[0].message.content;
		console.log(responseText)
		
		await interaction.editReply(responseText);
	},
};
