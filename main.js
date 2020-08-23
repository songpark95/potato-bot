const Discord = require('discord.js');
const client = new Discord.Client();
// client ready check. 
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', message => {
    console.log(`${member} said ${message.content}`);
});












client.login('Mzc3MjcwNzIwNjM3Njk4MDQ5.WgEOvQ.a1jBC-k0qZQoW_Terbsuho3M-bE');