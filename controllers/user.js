import { v4 as uuidv4 } from 'uuid';
import express from 'express';

let users = [

]

export const createuser=(req, res) => {
    res.send("post req granted");
    const user = { ...req.body, id: uuidv4() }
    users.push(user);
    console.log(users);}


export const findtheuser=(req, res) => {
        const { id } = req.params;
    
        const finduser = users.find((user) => user.id == id);
        console.log(finduser);
        res.send(finduser);
    
    }


export const deleteuser=(req,res)=>{
        const {id}= req.params;
    
        users=users.filter((user)=> user.id!=id);
        res.send(users);
    }

export const patchuser=(req,res)=>{
        const {id}=req.params;
        const{firstname,lastname,age}=req.body;
        const user=users.find((user)=> user.id==id);
    
        if(firstname) user.firstname=firstname;
        if(lastname) user.lastname=lastname;
        if(age) user.age=age;
    
        res.send("dhus")
    }