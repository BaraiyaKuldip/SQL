var express = require('express');
var app = express();

app.set('view engine','pug');
app.set('views','lessons');

app.get('/login',function(request,response){

    response.render("login");

});

app.get('/register',function(request,response){

    response.render("register");

});

app.get('/changepassword',function(request,response){

    response.render("change_password");

});

app.get('/forgotpassword',function(request,response){

    response.render("forgot_password");

});
app.listen(5000);
console.log("server is ready ..");