module.exports = (client) => {
    client.on('messageCreate', (msg) => {
        // Ignore messages from bots
        if (msg.author.bot) return;

        // Check if the message content is "hello" (case-insensitive)
        if (msg.content.toLowerCase() === 'hello') {
            // Fetch the member from the guild
            const member = msg.guild.members.cache.get(msg.author.id);

            if (member) {
                // Respond with the member's display name
                msg.reply(`Hello, ${member.displayName}!`);
            } else {
                // Respond with the author's username
                msg.reply(`Hello, ${msg.author.username}!`);
            }
        }
    });
};
