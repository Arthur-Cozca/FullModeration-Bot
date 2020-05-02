module.exports = async (bot, channel) => {
    var log = channel.guild.channels.find("name", "log");
    var embed = new Discord.RichEmbed()
    .setTitle("Channel Create")
    .addField("__Nom du Channel__", channel.name)
    .addField("__ID du Channel__", channel.id)
    .addField("Par:", channel.author.id + channel.author.username + channel.user.tag)
    log.send(embed)
}