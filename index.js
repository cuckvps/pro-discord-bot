const Discord = require('discord.js');
const bot = new Discord.Client();

const token ='NTczMzY4MjQ0MjI0OTE3NTA0.XMqcTw.H7_k-Di-bpL9ye9AcOj-vb5ZU_I';


bot.on('ready', () =>{
    console.log('Active!');
    bot.user.setActivity('Made by Cuck!')
})

bot.login(process.env.token);
