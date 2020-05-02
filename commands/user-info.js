const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
	let user = message.author;
		
		var embed = new Discord.RichEmbed()
		.setAuthor(user.tag, user.avatarURL)
		.setTitle("UserInfo")
		.addField('__UserName__', user.username)
		.addField("__Discriminator__", `#${user.discriminator}`)
		.addField("__ID__", user.id)
		.addField("__Bot__", user.bot)
		.addField("__Statut__", user.presence.status)
		.addField("__Creation du compte_", user.createdAt)
		.addField("__Serveur Join__", user.joinedAt)
		.addField("__Compte vérifié__", user.verifed)
		.addField("__Dernier message envoyer__", user.lastMessage)
		.addField("__ID du dernier message envoyer", user.lastMessageID)
		.addField("__Ping du user__", user.ping)
		message.channel.send("Veuillez patienter quelques secondes").then(m => {
			m.edit(embed);
			});
}

module.exports.help = {
    name: "user-info", 
    description: "permet d'obtenir les informations sur l'utilisateur",
    category: "utiles", 
    usage: "<prefix>user-info", 
    example: "<prefix>user-info", 
    aliases: ["ui", "userInfo"] 
};