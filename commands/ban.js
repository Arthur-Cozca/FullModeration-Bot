module.exports.run = (bot, message, args) => {
	if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(":x: Vous n'avez pas la permission suivante : **BAN_MEMBERS**"); 
    
    const user = message.mentions.members.first() || message.guild.members.find(i => i.id === args[0]);
    
    if(!args[0]) {
        return message.channel.send(":x: Veuillez mentionner une personne/donner une id !");
    };
    
    if(!user && args[0]) {
        return message.channel.send(":x: Le membre indiqué n'existe pas !");
    };
    
    const reason = args.slice(22).join(" ");
    
    if(!reason) {
        return message.channel.send(":x: Veuillez indiquer une raison !");
    };

    message.guild.member.ban(user, {
          reason: reason,
    });
    
    message.channel.send(`:white_check_mark: **${user.tag}** a été banni !`);
    
	var embed = new Discord.RichEmbed()
	.setColor(0xFE0003)
	.setTitle("Banissement")
	.setDescription(`Vous venez d'être banni par **${message.author.tag}** sur le serveur **${message.guild.name}**.`)
	.addField("Raison", `${reason}`);
	user.send(embed)
	.catch((err) => {
	    return client.logger.error(err);
	});
};

module.exports.help = {
    name: "ban",
    description: "Permet de ban un utilisateur",
    category: "moderation",
    usage: "<prefix>ban",
    example: "<prefix>ban",
    aliases: []
};
