import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './Routes/users.js';

const app = express();
app.use(express.json());

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users",usersRoutes);

app.get("/",function(req,res){
   res.send("hello from homepage");
})

app.post("/",function(req,res){
   
})

app.listen(3000,function(){
    console.log("Server running on port 3000");
})

