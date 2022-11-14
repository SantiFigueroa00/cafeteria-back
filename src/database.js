import mongoose from "mongoose";
//localhost=127.0.0.1
 const url = 'mongodb://localhost:27017/cafeteria-miles'; //local
// const url = 'mongodb+srv://santiFigueroa:rollingbase@cluster0.cj4ttta.mongodb.net/cafeteria-miles'; 


mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('BD conectada')
})