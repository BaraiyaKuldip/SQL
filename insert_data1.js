var connection = require('./connection') ; 
var sql = " INSERT INTO students (name,age,dob,gender,mobileNumber,address) VALUES ('Harsh',27,'1996-12-12',1,8154899621,'address')";
connection.con.query(sql,function(error,result){
    if (error){

        console.log('error');

    }

    else{

        console.log('student added successfully');

    }

});