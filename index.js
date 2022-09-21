const express = require('express')

const app = express()

app.use(express.json())



app.post("/",function(req,res){
    var { n } = req.body;
    
    n=Number(n)
    if(n == 0 || n ==1){
        
        res.send({rest:1})
    }
    
    
    var result = 1;
   
    while(n){
        result = result*n;
        n--
    }
    
    
    res.send({result:result})
})

app.listen("3000",function(err){
    if(err)
        console.log("Error occured")
    else
        console.log("server is live")
})