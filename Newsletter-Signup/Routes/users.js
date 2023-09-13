import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

let users = [
   
]

router.get("/", (req,res) =>{
    console.log(users);
    res.send(users);
});

router.get("/:id",(req,res) =>{
    const id = req.params.id;
    const foundUser = users.find()
    res.send(req.params);
})

router.delete("/:id",(req,res) =>{
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} is deleted.`);
})

router.patch("/:id",(req,res) =>{
    const { id } = req.params;
    const {firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id ===id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`user with the id ${id} is updated.`);
    
})

router.post("/",(req,res) =>{
    const user = req.body;
    const userWithId = {...user, id: uuidv4()}
    users.push(userWithId); 
    console.log("post route reached");
    console.log(req.body);
    res.send("user with the name " + user.firstName + " added to the database");
})

export default router;