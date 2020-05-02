const discord = require('discord.js')

module.exports.run = async(bot, message, args, prefix) => {
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(args[0] == "help"){
        message.reply("Usage: <prefix> @user #reason");
        return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Utilisateur Introuvable");
    let bReason = args.join(" ").slice(22);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut pas être ban !");

    message.delete()
bUser.message.delete()
    bUser.send(`:x: Vous avez été banni du serveur ${message.guild.name}, par ${message.author.tag} pour la raison suivante : ${bReason}`).then(() =>
    message.guild.ban(bUser, { days: 999, reason: bReason})).catch(err => console.log(err))

    message.channel.send(`**:white_check_mark: ${bUser.member.tag} a bien été banni du serveur !**`)

};

module.exports.help = {
    name: "cban",
    description: "Ban la personne, effacement de ses messages, puis unban",
    category: "moderation",
    usage: "<prefix>cban @user #reason",
    example: "<prefix>cban @Nova test",
    aliases: ["softban", "bandel", "miban"]
}
