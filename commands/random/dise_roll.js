const commando = require(discord.js-commando)

class dicerollcommand extends commando.command {
 constructor(client){
  super(client, {
   name: 'roll'
   group: 'random'
   membername: 'roll'
   discription: 'roll s die'

})
}

asyne run(message, args){
 var roll = math.floor(math.random() *6) +1
 message.reply("you rolled a " + roll);
}}

module.exports = diserollcommand;
