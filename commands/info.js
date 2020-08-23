module.exports = {
	name: 'info',
	description: 'show specific command arguments',
	execute(message, args) {
		if (!args.length) {
            return message.channel.send(`You didnt provide any arguments, ${message.author}.`);
        } 
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    },
    
};

