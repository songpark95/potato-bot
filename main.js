const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token} = require('./config.json');


// client ready check. 
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// pulls user info and logs it to the system upon request.

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    
    if (command === 'server-info') {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if(command === 'info') {
        if (!args.length) {
            return message.channel.send(`You didnt provide any arguments, ${message.author}.`);
        } 
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }

    }
);















client.login(token);