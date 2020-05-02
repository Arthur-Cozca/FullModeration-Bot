module.exports = async (bot, oChan, nChan) => {
    var log = oChan.guild.channels.find("name", "log");
    var embed = new Discord.RichEmbed()
    .setTitle("Channel update")
    .addField("__Ancien nom__", oChan.name)
    .addField("__Nouveau nom__", nChan.name)
    .addField("__ID du channel__", nChan.id)
    .addField("Par:", nChan.author.id + nChan.author.username + nChan.author.tag)
    log.send(embed)
}