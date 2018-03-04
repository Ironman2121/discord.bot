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


bot.login("NDE5ODAxNzA0Mzc3MDkwMDQ4.DX10MA.yywyjQo77ejLQV8CslEYSfqG7P4");
