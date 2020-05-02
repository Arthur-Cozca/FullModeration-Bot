const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("oVous ne pouvez pas faire cette action");
    if(args[0] == "help"){
        message.reply("Usage: <prefix>tmute @user <raison>");
        return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Utilisateur introuvable");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous ne pouvez pas le mute");
    let reason = args.slice(2).join(" ");
    if(!reason) return message.reply("Merci de mettre une raison");
    let muterole = message.guild.roles.find(`name`, "muted");
    await(tomute.removeRole(muterole.id));
}

module.exports.help = {
    name: "unmute",
    description: "Umute l'utilisateur",
    category: "moderation",
    usage: "<prefix>unmute @user <raison>",
    example: "commandexample",
    aliases: []
}