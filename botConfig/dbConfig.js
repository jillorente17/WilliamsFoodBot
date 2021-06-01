var mysql = require('mysql');

var dbAccess = {
    timeout : 60 * 60 * 1000,
    host :'db4free.net',
    user : 'bowshot721',
    password : '7912312jose',
    database : 'project'
}

let pool = mysql.createPool(dbAccess);

pool.on('connection',(connection)=>{
    console.log('Conexion establecida a DB'+connection);
    connection.on('error',(e)=>{
        console.log('Ha ocurrido un error en la conexión'+e)
    })
    connection.on('close',()=>{
        console.log('Desconexión exitosa a bd')
    })
    mysql.close()
})
module.exports = {pool,mysql}; 