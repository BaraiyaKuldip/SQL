var connection = require('./connection') ;
var sql = "UPDATE students set dob = '1996-12-10' where id = 2" ;
connection.con.query(sql,function(error,result){

    if (error){

        console.log(error);

    }

    else
    {
        console.log('Student data updated successfully');
    }

})
