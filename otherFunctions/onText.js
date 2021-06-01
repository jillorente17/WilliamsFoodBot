const objectInfo = require('../otherFunctions/objReg')
function onText(msg){
    var chatId = msg.chat.id;
    var userMsg = msg.text;
    const activity = ['register','delivery'];
    if(userMsg.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase().includes('nombre')){
        objectInfo.check(chatId,'activity','register')
    }
}
module.exports.onText = onText;