var objSaver ={};
function checkKeys(chatId,action,info){
    if(Object.keys(objSaver).includes('activity')){

    }else{
        objSaver[chatId]= ''
        objSaver[chatId]['activity'] = '';
    }
}


module.exports.check = checkKeys;