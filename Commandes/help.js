const Discord = require('discord.js');

exports.run = (client, message, args) => {
var help = new Discord.RichEmbed()
  .setTitle("Page d'aide du bot")
  .addField('mon préfix', "?" )
  .addField('Liste des commandes', "`ban` : bannir quelqu'un,  \n`kick` :  Kick quelqu'un,  \n`info <mention>` : permet de voir des information sur un personne specifique, \n`ping` : permet de saoir combien de ms met le bot à répondre, \n `clear <nombre de message>` : enlever un nombre de message spécifique, \n `caca` : essayer vous verrez.")
  .setColor('#08f320')
message.channel.send(help)
}
module.exports.help = {
  name: "help"  
}