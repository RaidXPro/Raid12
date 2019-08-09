const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("609421776325181452")
setInterval(function() {
channel.send(`حط الكلام اللي تبغاه هناSDDDhahhahhahahhhhhhhhhhhhhs`);
}, 30)
})

client.login(process.env.BOT_TOKEN);