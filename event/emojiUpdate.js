module.exports = async (bot, oEmoji, nEmoji) => {
    var log = oEmoji.guild.channels.find("name", "log");
    var embed = new Discord.RichEmbed()
    .setTitle("Emoji update")
    .addField("__Ancien nom__", oEmoji.name)
    .addField("__Nouveau nom__", nEmoji.name)
    .addField("__ID du channel__", nEmoji.id)
    .addField("Par:", nEmoji.author.id + nEmoji.author.username + nEmoji.author.tag)
    log.send(embed)
}