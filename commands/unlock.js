const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send(":x: Vous n'avez pas la permission :x:")
    
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    });
    
    message.channel.send(`**Le channel a été fermer par ${message.author} ! Pour l'ouvrir, faites over.unlock ! Les mod+AOg-rateurs pourront parler !**`) 
    var modlog = message.guild.channels.find('name', "mod-log")
         var lock = new Discord.RichEmbed()
          .setTitle("Unlock channel")
          .addField("ID", message.channel.id)
          .addField("Name", message.channel.name)
          modlog.send(lock)
  }

  module.exports.help = {
    name: "unlock", 
    description: "permet de d'ouvrir un channel",
    category: "modération", 
    usage: "<prefix>unlock", 
    example: "<prefix>unlock", 
    aliases: ["unlockChan", "unchanLock"] 
};