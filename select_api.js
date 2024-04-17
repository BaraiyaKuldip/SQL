var mysql = require('mysql');
var connection = require('./connection');
var express = require('express');
var app = express();


app.get('/customers',function(request,response){

    var sql = "select * from customers" ;
    connection.con.query(sql,function(error,result){

        if (error){

            response.json[{'error':error.message}];

        }

        else {

            var output = JSON.parse(JSON.stringify(result));

            let data = [
                {'error':'no'},
                {'total':result.length},
                {'data': output}
            ];

            response.json(data);


        }

    });

});



app.get('/customers/:customerNumber',function(request,response){

    var customerNumber = request.params.customerNumber ;

    var sql = `select * from customers where customerNumber = '${customerNumber}'` ;

    connection.con.query(sql,function(error,result){

        if (error){
            response.json([{'error' : error.message
            }]);
        }
        else{
            
            var output = JSON.parse(JSON.stringify(result));

            let data = [
                {'error':'no'},
                {'total':result.length},
                {'data':output}
            ];

            response.json(data);


        }
    })

});



// app.get('/payments',function(request,response){

//     var sql = "select * from payments";
//     connection.con.query(sql,function(error,result){

//         if(error){
//             response.JSON[{'error':error.message}];
//         }

//         else {
//             var output = JSON.parse(JSON.stringify(result)); 

//             let data = [
//                 {'error':'no'},
//                 {'total':result.length},
//                 {'data':output}
//             ];

//             response.JSON(data);

//         }

//     });

// });



app.get('/payments',function(request,response){

    var sql = " select * from payments";
    connection.con.query(sql,function(error,result){
       
        if (error){

            response.json([{'error':error.message}]);


        }

        else {

            var output = JSON.parse(JSON.stringify(result));

            let data = [
                {'error':'no'},
                {'total':result.length},
                {'data':output}
            ];

            response.json(data);
        }

    });

});




app.get('/payments/:customerNumber',function(request,response){
    var customerNumber = request.params.customerNumber;
    
    var sql = `select * from payments where customerNumber = customers."${customerNumber}"`;

    connection.con.query(sql,function(error,result){
        if (error){

            response.json([{'error':error.message}])

        }

        else{

            var output = JSON.parse(JSON.stringify(result));

            let data = [

                {'error':'no'},
                {'total':result.length},
                {'data':output}
            ]

            response.json(data);
        }
    })
})



app.listen(5000);
console.log('Server ready . . .');