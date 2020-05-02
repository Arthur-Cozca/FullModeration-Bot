const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("oVous ne pouvez pas faire cette action");
    if(args[0] == "help"){
        message.reply("Usage: <prefix>tmute @user <1s/m/h/d>");
        return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Utilisateur introuvable");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous ne pouvez pas le mute");
    let reason = args.slice(2).join(" ");
    if(!reason) return message.reply("Merci de mettre une raison");
let muterole = message.guild.roles.find(`name`, "muted");

if(!muterole){
    try{
        muterole = await message.guild.createRole({
            name: "muted",
            color: "#000000",
            permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });
    }catch(e){
        console.log(e.stack);
    }
}

let mutetime = args[1];
if(!mutetime) return message.reply("Merci de mettre un temps de mute !");

message.delete().catch(O_o=>{});

try{
    await tomute.send(`Vous avez été mute ${mutetime} par ${message.author.id} pour la raison : ${reason}`)
}catch(e){
    message.channel.send(`La personne a bloqué ses MPs, mais elle est quand même mute pendant ${mutetime}`)
}

l

await(tomute.addRole(muterole.id));

setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> a bien été unmute, elle aura été mute ${mutetime}`);
}, ms(mutetime));



}

module.exports.help = {
name: "tmute",
description: "Mute l'utilisateur pendant un certains temps",
category: "moderation",
usage: "<prefix>tmute @user #time ",
example: "commandexample",
aliases: ["tempmute", "tempomute", "tm"]
};