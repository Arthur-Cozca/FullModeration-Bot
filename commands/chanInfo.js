const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
	let chan = message.channel;
		
		var embed = new Discord.RichEmbed()
		.setTitle("__**Channel Info**__") 
		.addField("__Channel Name__", chan.name)
		.addField("__Channel Id__", chan.id)
		.addField("__Créé le__", chan.createdAt)
		.addField("__Channel Textuel__", chan.type)
		.addField("__Channel Position__", chan.calculatedPosition)
		.addField("__Catégorie Channel__", chan.parent)
		.addField("__Catégorie Channel__", chan.parentID)
		.addField("__Channel Permissions__", chan.permissionOverwrites)
		.addField("__Channel Notifications__", chan.messageNotifications)
		message.channel.send("Recuperation des informations sur le channel....").then( m => {
		m.edit(embed)
		})
}

module.exports.help = {
    name: "chanInfo", 
    description: "permet d'obtenir les informations sur le channel",
    category: "utiles", 
    usage: "<prefix>chanInfo", 
    example: "<prefix>chanInfo", 
    aliases: ["ci", "channelInfo"] 
};