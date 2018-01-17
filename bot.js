const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ns') {
        message.reply('Voor de treintijden, check www.ns.nl of de treinen wel echt rijden. Haha doei. ^NS');
      }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
