const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
console.log('Karol lebt!')
    client.user.setActivity("with Alex!")
    console.log("Servers:")

    client.guilds.cache.forEach((guild) => {
        console.log(" - " + guild.name)

        guild.channels.cache.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    });
    let botcommands = client.channels.cache.get("763467469942947840")
});



//Do not delete!!!!!!!!!!
client.login(process.env.token);