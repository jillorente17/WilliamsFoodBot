const objectInfo = require('../otherFunctions/objReg');
const bot = require('../appBot');
function onText(msg){
    var chatId = msg.chat.id;
    var userMsg = msg.text;

    if(userMsg.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase().includes('nombre')){
        objectInfo.check(chatId,'productName',userMsg.substring(6,userMsg.length));
        bot.sendMessage(chatId,`Seguido de la palabra *costo*, defina el costo del producto`)
    }else if(userMsg.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase().includes('costo')){
        objectInfo.check(chatId,'cost',userMsg.substring(5,userMsg.length));
        console.log(objectInfo.objData[chatId]);
    }
}

module.exports.onText = onText;