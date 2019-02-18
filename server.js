const express=require('express')
const app=express();

app.get('/', function(req,res) {
res.write('Hello');
res.end();
})

app.listen(3000);

app.use(function(req,res){

res.write('Error 404');
res.end();
})