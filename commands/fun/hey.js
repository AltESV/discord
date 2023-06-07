const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hey')
		.setDescription('Reply from Hank!'),
	async execute(interaction) {
		await interaction.reply('Howdy!');
	},
};