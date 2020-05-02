const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
    var embed = new Discord.RichEmbed()
    .setFooter("Bot Info")
    .setTimestamp()
    .setTitle("Botinfo")
    .addField("Nom D'utilisateur Bot:", client.user.username)
    .addField("Bot Discrim:", `#${client.user.discriminator}`)
    .addField("Bot ID:", client.user.id)
    .addField("Cree :", client.user.createdAt)
    .addField("Nombres de Users", client.users.size)
    .addField("Nombres de serveurs", client.guilds.size)
    .addField("Nombres de channels", client.channels.size)
    .addField("Ping", client.ping + "ms")
message.channel.send("Veuillez patienter quelques secondes").then(m => {
			m.edit(embed);
			});
}

module.exports.help = {
    name: "bot-info", 
    description: "permet d'obtenir les informations sur le bot",
    category: "utiles", 
    usage: "<prefix>bot-info", 
    example: "<prefix>bot-info", 
    aliases: ["bi"] 
};