const pool = require('../botConfig/dbConfig');
function findActivities(mysql){
    queryForActivity = `SELECT * 
    FROM tbl_products`;
    pool.pool.query(queryForActivity,(e,d)=>{
        if(e){console.log('Ha ocurrido un error en findActivities '+e)}
        else{
            console.log(d);
            mysql.close();
        }
    })

}

module.exports.activity = findActivities;