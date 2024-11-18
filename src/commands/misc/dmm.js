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
    },
    {
      name: 'reason',
      description: 'The reason for banning.',
      type: ApplicationCommandOptionType.String,
    },
  ],
  permissionsRequired: [PermissionFlagsBits.Administrator],
  botPermissions: [PermissionFlagsBits.Administrator],

  callback: (client, interaction) => {
    const targetObject = interaction.options.get('target-user');
    const member = interaction.guild.members.cache.get(targetObject.user.id);

    if (member) {
      // Respond with the member's display name
      interaction.reply(`Địt mẹ mày ${member.displayName}`);
    } else {
      // Respond with the author's username
      interaction.reply(`Địt mẹ mày, ${member.username}!`);
    }
  },
};
