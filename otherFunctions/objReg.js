var objSaver ={};

function checkKeys(chatId,action,info){
    if(Object.keys(objSaver).includes('register')){
        saveData(chatId,action,info);
    }else{
        objSaver[chatId]= ''
        objSaver[chatId]['register'] = '';
        objSaver[chatId]['productName'] = '';
        objSaver[chatId]['cost'] = '';
    }
}

function saveData(chatId,action,info){
    switch(action){

        case 'productName':
            objSaver[chatId]['productName'] = info;
        break;
        case 'cost':
            objSaver[chatId]['cost'] = info;
        break;

    }
}


module.exports.check = checkKeys;
module.exports.objData = objSaver;