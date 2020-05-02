const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

        let reason = message.content.split(" ").slice(2).join(" ")
        message.delete().catch()
                if (!reason) reason = "aucune raison donné"
                if (!args) return message.reply('Merci de mentionner une personne valide.');
                if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Désolé, il te faut la permission `BAN_MEMBERS` pour faire ceci.');
                if (kUser.hasPermission('BAN_MEMBERS')) return message.reply('Désolé, mais tu ne peux pas bannir cette personne.');
                var kEmbed = new Discord.RichEmbed()
                .setTitle(`Membre Banid`)
                .addField("ID de l'utilisateur :", args)
                .addField("Modérateur :", `${message.author.username}`)
                .addField("Raison :", reason)
                message.guild.ban(args, {reason, reason})
                message.delete().catch(O_o=>{});
                message.guild.channels.find('name', 'logs-bots').send(kEmbed)
}

module.exports.help = {
    name: "banid", 
    description: "permet de ban un utilisateur avec son ID",
    category: "modération", 
    usage: "<prefix>banid <id> <reason>", 
    example: "<prefix>banid <id> <reason>", 
    aliases: [] 
};