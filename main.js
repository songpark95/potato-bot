const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

// dynamically retrieve command files from commands folder 
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // setting a new item in the collection with the key as command name and value as exported module!
    client.commands.set(command.name, comnmand);
}



// client ready check. 
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// pulls user info and logs it to the system upon request.

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === 'server-info') {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if(command === 'info') {
        if (!args.length) {
            return message.channel.send(`You didnt provide any arguments, ${message.author}.`);
        } 
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    } else if(command === 'user-info') {
        message.channel.send(`User name: ${message.author.username}\nUser ID: ${message.author.id}`);
    }

    }
)















client.login(token);