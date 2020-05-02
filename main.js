const { Client, Collection } = require("discord.js");
const bot = new Client({
    disableEveryone: true
});

const cron = require("node-cron");
 
//Collections de commands & alias
bot.commands = new Collection();
bot.aliases = new Collection();
//Importation de nos fichier principaux dans le client
bot.config = require("./utils/config");
bot.handler = require("./utils/handler");
bot.logger = require("./utils/logger");

//Chargement des events et commands
bot.handler.events(bot);
bot.handler.commands(bot);

