const bot = require('../appBot');
function displayButtonOnKeyboard(chatId,objectRes,message) {
    buttonOptions = {
        reply_markup: {
            keyboard: objectRes,
            one_time_keyboard:true,
            resize_keyboard: true,
            remove_replykeyboard: true
        }
    }

    bot.sendMessage(chatId,message,buttonOptions);   
}

function displayButtonOnKeyboardInline(chatId,objectRes,message) {
    buttonOptions = {
        reply_markup: {
            inline_keyboard: objectRes,
            one_time_keyboard:true,
            resize_keyboard: true,
            remove_replykeyboard: true
        }
    }
    bot.sendMessage(chatId,message,buttonOptions);   
}


/*----------------------------*/
