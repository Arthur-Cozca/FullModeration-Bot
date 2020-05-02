const Discord = require('discord.js')

module.exports.run = async(bot, message, args, prefix) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas les permissions!");
    if(args[0] == "help"){
        message.reply("Usage: <prefix>ckick @user #reason");
        return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Utilisateur Introuvable");
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("Cette personne ne peut pas être kick !");

    message.delete()
kUser.message.delete()
    kUser.send(`❌ Vous avez été banni du serveur ${message.guild.name}, par ${message.author.tag} pour la raison suivante : ${kReason}`).then(() =>
    message.guild.ban(bUser, { days: 999, reason: bReason})).catch(err => console.log(err))

    message.channel.send(`**✅ ${kUser.member.tag} a bien été kick du serveur !**`)

};

module.exports.help = {
    name: "cKick",
    description: "Kick la personne, effacement de ses messages",
    category: "moderation",
    usage: "<prefix>ckick @user #reason",
    example: "<prefix>ckick @Nova test",
    aliases: ["softkick", "kickdel", "mikick"]
}; 