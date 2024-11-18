const {
  ApplicationCommandOptionType,
  PermissionFlagsBits,
} = require('discord.js');

module.exports = {
  name: 'dmm',
  description: 'dmm!!!',
  // devOnly: Boolean,
  // testOnly: Boolean,
  options: [
    {
      name: 'target-user',
      description: 'The user to dou.',
      required: true,
      type: ApplicationCommandOptionType.Mentionable,
    }
  ],

  callback: (client, interaction) => {
    // Retrieve the target-user option
    const targetObject = interaction.options.get('target-user');

    // Ensure the target object and user exist
    if (!targetObject || !targetObject.user) {
      return interaction.reply('Could not find the target user!');
    }

    // Get the guild member
    const member = interaction.guild.members.cache.get(targetObject.user.id);

    if (member) {
      // Respond with the member's display name
      interaction.reply(`Địt mẹ mày ${member}`);
    } else {
      // Respond with the author's username
      interaction.reply(`Địt mẹ mày, <@${targetObject.user.id}>!`);
    }
  },
};
