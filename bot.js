const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === '!Help') {
    	message.reply('How Can I Help You');
        }
    });

client.on('message', message => {
    if (message.content === '!cmds') {
    	message.reply('@everyone Cmds are Ban,Kick,');
  	}
    });

client.on('message', message => {
    if (message.content === '!Ban') {
    	message.reply('Player has been banned');
  	}
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
 
