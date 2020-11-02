const Discord = require('discord.js');

const client = new Discord.Client();

//initialisation
client.once('ready', () => {
console.log('Karol lebt!')
    client.user.setActivity("with Alex!")
//    console.log("Servers:")

 //   client.guilds.cache.forEach((guild) => {
//        console.log(" - " + guild.name)
//
//        guild.channels.cache.forEach((channel) => {
//            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
//        })
//    });
//    let botcommands = client.channels.cache.get("763467469942947840")
});

//main code
commands()

//Funktionen um platz im main code zu sparen

function commands () {
    client.on("message", msg => {
        if (msg.content === "/help"){
            msg.reply("Brauchst du Hilfe?")
            setTimeout(() => {msg.reply("Das ist aber süß..."); }, 2000);
            setTimeout(() => {msg.reply("GRIEGST DU ABER NICHT!!!!!"); }, 5000);
            setTimeout(() => {msg.reply("MUHAHAHAHAHAHAHAHAHAHAHAHA!!!!!!"); }, 8000);
            
        }
    })
}

//Do not delete!!!!!!!!!!
client.login(process.env.token);