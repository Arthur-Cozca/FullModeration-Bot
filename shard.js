const { ShardingManager } = require("discord.js");
const config = require("./Utils/config");
const logger = require("./Utils/logger");

//Définition du shard manager
const shards = new ShardingManager("./index.js", {
    token: config.token,
    totalShards: "auto"
});

//On lance les shards un par un
shards.on("launch", (shard) => {
    logger.info(`Shard ${shard.id} lancé !`);
});

//On envoie en information que tous les shards ont bien été lancés
shards.spawn()
.then(() => {
    logger.info(`${shards.totalShards} shards lancés au total !`);
});
