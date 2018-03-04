const commando = require('discord.js-commando')
const bot = new commando.Client();

bot.on('message', (message) => {
    if(message.content == 'hi'){
        message.reply('yo');
    }
})


bot.registry.registerGroup('random', 'random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");


bot.login(process.env.BOT_TOKEN);
