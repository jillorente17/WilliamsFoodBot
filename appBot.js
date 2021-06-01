const {token,title} = require('../WilliamsFoodBot/botConfig/basicConfig');
const {pool,mysql} = require('../WilliamsFoodBot/botConfig/dbConfig')
const telegramBot  =require('node-telegram-bot-api');
const bot = new telegramBot(token,{polling:true});

const text = require('../WilliamsFoodBot/otherFunctions/onText');
const consult = require('../WilliamsFoodBot/otherFunctions/consult')
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