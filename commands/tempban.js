const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("oVous ne pouvez pas faire cette action");
    if(args[0] == "help"){
        message.reply("Usage: <prefix>tban @user <1s/m/h/d>");
        return;
    }
    let toban = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!toban) return message.reply("Utilisateur introuvable");
    if(toban.hasPermission("BAN_MEMBERS")) return message.reply("Vous ne pouvez pas le ban");
    let reason = args.slice(2).join(" ");
    if(!reason) return message.reply("Merci de mettre une raison");

    let bantime = args[1];
    if(!bantime) return message.reply("Merci de mettre un temps de ban !");

    message.delete().catch(O_o=>{});

    try{
        await toban.send(`Vous avez été mute ${bantime} par ${message.author.id} pour la raison : ${reason}`)
    }catch(e){
        message.channel.send(`La personne a bloqué ses MPs, mais elle est quand même ban pendant ${bantime}`)
    }

    l

    await(tomute.ban());

    setTimeout(function(){
        tomute.unban(toban.id);
        message.channel.send(`<@${toban.id}> a bien été unban, elle aura été ban ${bantime}`);
    }, ms(bantime));
}

module.exports.help = {
    name: "tban",
    description: "Ban l'utilisateur pendant un certains temps",
    category: "moderation",
    usage: "<prefix>tban @user #time ",    example: "commandexample",
    aliases: ["tempban",  "tb"]
};