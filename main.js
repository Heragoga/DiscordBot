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
            msg.reply("Hallo!")
            setTimeout(() => {msg.reply("Ich bin Karol, der Chatbot von Damax´Discord Server."); }, 2000);
            setTimeout(() => {msg.reply("Ich wurde von Heragoga gemacht und jetzt werde ich dir erzählen was ich kann. Meine Version ist 1.1"); }, 3000);
            setTimeout(() => {msg.reply("Du kannst mit mir einfach chatten, aber ich verstehe nur Sätze die mit / anfangen, komplett klein geschrieben sind und grammatikalisch korrekt. Bitte schreibe ohne Satzzeichen."); }, 4000);
            setTimeout(() => {msg.reply("Versuche </hallo karol>"); }, 5000);
            
        }
        if (msg.content === "/hallo karol"){
            client.message.send("Hallo!")
            setTimeout(() => {client.message.send(author,"Wie gehts`s?");}, 2000)
        }
    })
}
//Do not delete!!!!!!!!!!
client.login(process.env.token);