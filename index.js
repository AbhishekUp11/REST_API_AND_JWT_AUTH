const express = require('express');
const server = express();
const mongoose = require('mongoose');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const publicKey = fs.readFileSync(path.resolve(__dirname,'./public.key'),'utf-8');


async function main(){
    await mongoose.connect('mongodb://localhost:27017/ecom')
    console.log("Database Connected successfully")
}

main().catch((err) =>{
    console.log("error in DB Connection", err)
})

const auth = (req, res, next) =>{
    try{
       const token = req.get('Authorization').split('Bearer ')[1]
       var decoded = jwt.verify(token, publicKey);
       if(decoded.email){
          next()
       }else{
          res.sendStatus(401)
        }
    }catch(err){
        res.sendStatus(401)
    }
};

server.use(express.json());
server.use('/auth', authRouter.router)
server.use('/product', productRouter.router)
server.use('/users', auth, userRouter.router)

server.listen(8080, ()=>{
    console.log("Server has started....")
})