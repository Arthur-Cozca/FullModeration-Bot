const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("Vous n'avez pas les permissions"); 
    let user = message.mentions.users.first();
if(!args[0]) return message.reply("Vous devez entrer une raison");
if(user) { 
let member = message.guild.member(user)
if (member) {
        member.kick().then(() => {
          message.reply(`${member} a été kick`);
          var modlog = message.guild.channels.find('name', "mod-log")
       var kick = new Discord.RichEmbed()
          .setTitle("User kick")
          .addField("User + tag", `${member}`)
                        modlog.send(kick)
                        var embed = new Discord.RichEmbed()
                        .setTitle("KICK")
                        .addField("Vous venez d'être kick par", `${message.author.username}`)
                        .addFiedl("Comme raison", `${args[0]}`)
                        member.send(embed)
        }).catch(err => {
          message.reply("Le user n'a pas etais kick");
          console.error(err);
        });
   } else {
      message.reply('Vous devez utiliser un mentionner un utilisateur');
   }
}
}

module.exports.help = {
    name: "kick", 
    description: "permet d'expluser un utilisateur",
    category: "modération", 
    usage: "<prefix>kick", 
    example: "<prefix>kick", 
    aliases: [] 
};