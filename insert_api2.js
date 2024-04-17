var express = require('express');
var app = express();
var connection = require('./connection');
var mysql = require('mysql');

app.use(express.json());

app.post('/students',function(request,response){

    console.log('INSERT student called ');
    console.log(request.body);

    let name = request.body.name ;
    let age = request.body.age ;
    let gender = request.body.gender ;
    let dob = request.body.dob ;
    let mobileNumber = request.body.mobileNumber ;
    let address = request.body.address ;


    console.log(`The value of name is ${name} ,age is ${age} , gender is ${gender} , dob is ${dob} , mobile is ${mobileNumber} , address is ${address}`);

    var sql = `insert into students (name,age,gender,dob,mobileNumber,address) values ("${name}",${age},${gender},"${dob}","${mobileNumber}","${address}")` ;

    connection.con.query(sql,function(error,result){

        if(error){

            response.json([{'error':error.message}]);

        }

        else{

            let data = [

                {'error':'no'},
                {'success':'yes'},
                {'message':'Students Inserted successfully'}

            ]

            response.json(data);

        }

    });


});

app.listen(5000);
console.log("server is ready ...");