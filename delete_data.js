var connection = require('./connection');
var sql = "delete from students where id = 3";

connection.con.query(sql,function(error,result){

    if(error){

        console.log(error);

    }

    else{

        console.log('Student deleted successfully');

    }

});