const { SlashCommandBuilder } = require("discord.js");
require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("Enter raffle")
    .addStringOption((option) =>
      option.setName("input").setDescription("Your twitch handle")
    ),
  async execute(interaction) {
    const userPrompt = interaction.options.getString('input');
    const { data, error } = await supabase.from('entrants').insert({username: userPrompt})
    if(error) {
        console.error('Error inserting data:', error.message);
        await interaction.reply('Failed to enter. Please try again later.');
        return;
    }
    await interaction.reply(`You're in the raffle! ${interaction.user.username}🎉`);
  },
};
