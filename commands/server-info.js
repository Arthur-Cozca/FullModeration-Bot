const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
	var si = new Discord.RichEmbed()
    .setTitle("Serveur Info")
    .setAuthor(message.guild.icon)
    .addField("__Nom du serveur__", message.guild.name)
    .addField("__Owner__", message.guild.owner.user.tag)
    .addField("__ID du serveur__", message.guild.id)
    .addField("__Region__", message.guild.region)
    .addField("__Nombre d'utilisateur dans le serveur__", message.guild.memberCount)
    .addField("__Nombre de bots dans le serveur__", message.guild.members.filter(m => m.user.bot).size)
    .addField("__Créé le__", message.guild.createdAt)
    .addField("__Vous avez rejoins le serveur__", message.guild.joinedAt)
    .addField("__Nombres de channels__", `${message.guild.channels.filter(channel => channel.type === 'text').size} text - ${message.guild.channels.filter(channel => channel.type === 'voice').size} audio`)
    .addField("__Nombres de rôles__", message.channel.guild.roles.size)
    .addField("__Roles__", message.guild.roles)
    message.channel.send("Veuillez patienter quelques secondes").then(m => {
			m.edit(si);
			});
}

module.exports.help = {
    name: "server-info", 
    description: "permet d'obtenir les informations sur le serveur",
    category: "utiles", 
    usage: "<prefix>server-info", 
    example: "<prefix>server-info", 
    aliases: ["si", "guildInfo"] 
};