module.exports = {
	name: 'server-info',
	description: 'Pull server info and total members',
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    },
    
};