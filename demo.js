var mysql = require('mysql');
var con = mysql.createConnection({

    host : 'localhost' ,
    port : 3306 ,
    user : 'root',
    password : '' ,
    database : 'customers'

});

con.connect (function (error){

    if(error){
        console.log('error');
    }

    else{

        console.log('connection established successfully . . . ');
    }

});

module.exports.con = con ;