import express from "express";

//crear una instancia de express
const app = express();

//configurar un puerto
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'),()=>{
    console.log('estoy en el purto '+ app.get('port'))
})

console.log('hola miufdsg')