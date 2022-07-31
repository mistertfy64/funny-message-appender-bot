const fs = require("fs");
const { Client, Intents, Collection } = require("discord.js");

const append = require("./append.js");

let isActive = true;
let operators = [];
let targets = [];


require("dotenv").config({ path: ".env" });

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

initialize();

client.once("ready", () => {
	console.log("Bot is ready!");
});

client.on("messageCreate", (message) => {
    if (message.content.startsWith("fmab!") && operators.indexOf(message.author.id) > -1 ){
        isActive = !isActive;
        message.reply(`Active: ${isActive.toString()}`)
        return;
    }

    if (targets.indexOf(message.author.id) > -1){
        let channel = client.channels.cache.get(message.channel.id);
        channel.send(message.content + " " + append.appendToMessage());
    }
});

process.on("unhandledRejection", (error) => {
	console.error(error.stack);
});

function initialize(){
    let configuration = JSON.parse(fs.readFileSync("configuration.json"));
    for (let operator of configuration.operators){
        operators.push(operator);
    }
    for (let target of configuration.targets){
        targets.push(target);
    }
}

client.login(process.env.DISCORD_BOT_TOKEN);