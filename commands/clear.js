const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Pardon, tu n'as pas les permissions pour faire cela !")
		if(!args) return message.channel.send("Merci de spécifier un nombre de messages à supprimer")
		let embed = new Discord.RichEmbed()
		.setTitle("**Message purge :**")
		.setDescription(`${args} message supprimés par le modérateur ${message.author.username} dans le salon ${message.channel}`)
		.setTimestamp()
	    
		message.channel.bulkDelete(args).then(() => {
		    message.delete().catch();
			message.channel.send(`:wastebasket: ${args} message supprimés !`).then(message => message.delete(2000))
			message.guild.channels.find('name', 'logs-bots').send(embed).catch(console.error);
     })

}

module.exports.help = {
    name: "clear"
}
