import express from "express";
import cors from 'cors'
import morgan from "morgan";
import productoRouter from './routes/productos.routes'
import path from "path";
//conxion con la DB
import './database';


//crear una instancia de express
const app = express();

//configurar un puerto
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'),()=>{
    console.log('estoy en el purto '+ app.get('port'))
})

//middlewares: func que se ejeccutan antes de llegar a la rutas
app.use(cors());//permite peticiones remotas}

//permite reciir y usar objetos en formato json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//indormacion extra
app.use(morgan('dev'))
// cargar un archivo estatico
app.use(express.static(path.join(__dirname,'../public')))
console.log(path.join(__dirname,'../public'))


//rutas
// app.get('/prueba',(req,res)=>{
//     res.send('hola desde el backend en la peticion get')
// })

app.use('/apicafe',productoRouter)
