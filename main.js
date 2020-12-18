const Discord = require('discord.js');

const client = new Discord.Client();

//initialisation
client.once('ready', () => {
console.log('Karol lebt!')
    client.user.setActivity("with Sebastian and Christovie!")
    console.log('Ready!');
});
client.once('reconnecting', () => {
 console.log('Reconnecting!');
});
client.once('disconnect', () => {
 console.log('Disconnect!');
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
// Vorlage:
//  if (msg.content === "/schlecht"){
//    msg.reply("Warum?")      w     
//  }      
//
//client.on('message',  message => {
//	// Join the same voice channel of the author of the message
//	if (message.content === "/sax") {
 //       message.member.voice.channel.join();
 //       connection.play('/home/discord/audio.mp3');
 //   }
 //   if (message.content === "/raus") {
 //        message.member.voice.channel.leave();
 //   }
 //   // Create a dispatcher
 //   //oiwqj
//});
client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === '/join') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('audio.mp3');
      } else {
        message.channel.send('You need to join a voice channel first!');
      }
    }
  });
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
            msg.reply("Hallo!")
            setTimeout(() => {msg.reply("Wie gehts`s?");}, 2000)
         }
        if (msg.content === "/gut"){
            msg.reply("Mir auch.")           
        }
        if (msg.content === "/geht"){
            msg.reply("Mir gut.")           
        }
        if (msg.content === "/schlecht"){
            msg.reply("Warum?")           
        }      
        if (msg.content === "/bist du dumm"){
            msg.reply("nein aber ich glaube du")
        }
        if (msg.content === "/töte mich", msg.content === "/kill"){
            
            msg.reply("Okeeee")
            setTimeout(() => {msg.reply("Warte..."); }, 5000);
            setTimeout(() => {msg.reply("DREH DICH UM !!!!!!!!"); }, 10000);
            setTimeout(() => {msg.reply("Muhahahah"); }, 11000);
        }
        if (msg.content === "Mehr kannst du nicht Karol"){
            msg.reply("jedenfalls mehr als du")
        }
        if (msg.content === "/status"){
            msg.reply("Warum?")           
        }    
    })
}
//Do not delete!!!!!!!!!!
client.login(process.env.token);