const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
	if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Vous n'avez pas la permission :x:")
    
    message.channel.overwritePermissions(message.guild.id, {
      VIEW_CHANNEL: false,
      SEND_MESSAGES: false
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
    name: "unViewChan", 
    description: "permet de faire disparaître le channel", 
    category: "modération", 
    usage: "<prefix>unViewChan", 
    example: "<prefix>unViewChan", 
    aliases: ["unViewChannel"] 
};