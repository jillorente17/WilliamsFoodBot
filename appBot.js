const {token,title} = require('../WilliamsFoodBot-1/botConfig/basicConfig');
const {pool,mysql} = require('../WilliamsFoodBot-1/botConfig/dbConfig')
const telegramBot  =require('node-telegram-bot-api');
const bot = new telegramBot(token,{polling:true});

const text = require('../WilliamsFoodBot-1/otherFunctions/onText');
const consult = require('../WilliamsFoodBot-1/otherFunctions/consult');
const callback = require('../WilliamsFoodBot-1/otherFunctions/onCallback')
process.title = title;

bot.on('polling_error',(e)=>{
    console.log('Ha ocurrido un error en '+e)
})

bot.onText(/^\/registrar/,(msg)=>{
    chatId = msg.chat.id;
    regMsg = `Seguido de la palabra *Nombre*, escriba el producto`;
    bot.sendMessage(chatId,regMsg,{parse_mode:"Markdown"})
    consult.activity(mysql);
})

bot.on('text',(msg)=>{
    text.onText(msg);
    
})

bot.on('callback',(msg)=>{
    callback.onCallback(msg);
})

function sendMessage(chatId,message){
    bot.sendMessage(chatId,message,{parse_mode:"Markdown"})
}

module.exports.sendMessage = sendMessage;