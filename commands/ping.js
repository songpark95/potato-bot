module.exports = {
	name: 'ping',
	description: 'Echo command to see if the bot is alive!',
	execute(message, args) {
		message.channel.send('Pong.');
    },
    
};