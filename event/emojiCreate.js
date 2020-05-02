module.exports = async (bot, emoji) => {
    var log = emoji.guild.channels.find("name", "log");
    var embed = new Discord.RichEmbed()
    .setTitle("Emoji Create")
    .addField("__Nom du Channel__", emoji.name)
    .addField("__ID du Channel__", emoji.id)
    .addField("Par:", emoji.author.id + emoji.author.username + emoji.user.tag)
    log.send(embed)
}