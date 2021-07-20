const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');



const {prefix} = require('./prefix.js');
const { token } = require('./config.json')
console.log(prefix)


client.commands = new Discord.Collection();

const CommandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));


for(const file of CommandFiles){
    const command = require (`./commands/${file}`)
    client.commands.set(command.name, command)
}

lastmsg = 0;


client.once('ready', async () => {
    console.log('Bot is online!');

    process.on('unhandledRejection', error => {
        console.error('Unhandled promise rejection:', error);
    });
});

client.on('message', message => {
    if(!message.content.startsWith(prefix,0) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(message.content.includes(`866181972447199262>`)) return message.channel.send("Thats Me!")
    if(command === "test") return message.channel.send("testing!")

    try{client.commands.get(command).execute(message, args)}catch{return}
})

client.login(token);
