const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
	if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Vous n'avez pas la permission :x:")
    
    message.channel.overwritePermissions(message.guild.id, {
      VIEW_CHANNEL: null,
      SEND_MESSAGES: null
    });
    
    message.channel.send(`**Le channel a vu par tous**`) 
	var modlog = message.guild.channels.find('name', "mod-log")
        var view = new Discord.RichEmbed()
          .setTitle("View Channel")
          .addField("View par", message.author.username)
          .addField("ID", message.channel.id)
          .addField("Name", message.channel.name)
          modlog.send(view)
}

module.exports.help = {
    name: "viewChan", 
    description: "permet de faire reapparaître le channel", 
    category: "modération", 
    usage: "<prefix>viewChan", 
    example: "<prefix>viewChan", 
    aliases: ["viewChannel"] 
};