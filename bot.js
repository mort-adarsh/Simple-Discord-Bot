require("dotenv").config()
const Discord =require("discord.js")

const client = new Discord.Client({
    partials: ["MESSAGE"]
})

client.on('ready', ()=>
{    
    console.log("Bot is running");
}); 

const Ab = ["hello", "how are you", "what you doo"];

const len = Ab.length;


client.on('messageDelete', msg => {
    msg.channel.send("Bsdkwale Msg Mat del karo");
});




client.on('message', msg => {
    var ran = Math.floor((Math.random() * len));
    if(msg.member=="757905226119249950")
    {   
        msg.react('❤️');
    }
    else if(msg.member =="806530366479400993")
    {

    }
    else if(msg.member =="806530366479400993")
    {
        msg.reply("Hacker Sir");
        msg.react('❤️');
    }
    else
    {   switch (msg.content) {
        case "Baap":
            msg.reply("Tumhare Baap hain Hum");
          break;
        default:
            break;
    }

        
    msg.reply(Ab[ran]);
    msg.react('😡');  
    }

    if(msg.content=="Creator")
    {   
        msg.channel.send("Adarsh Srivastav is my creator");
        
    }

});

client.login(process.env.BOT_TOKEN)
