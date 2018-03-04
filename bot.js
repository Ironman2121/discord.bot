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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.MzI0OTQzMDU0NDYzMTcyNjA4.DX1OYA.jP-uvOhUvIUJcJrINoS1dR0gG4I);


--MzI0OTQzMDU0NDYzMTcyNjA4.DX1OYA.jP-uvOhUvIUJcJrINoS1dR0gG4I
