var connection = require("./connection");
var sql = " INSERT INTO students (name,age,dob,gender,mobileNumber,address) VALUES ('Kuldip',20,'2004-09-07',1,9313759302,'this is address')";
connection.con.query(sql,function(error,result){

    if(error){

        console.log(error);

    }

    else{

        console.log('Student added successfully . . .');

    }

});