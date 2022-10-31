import { Router } from "express";
import { crearProducto, listarProductos } from "../controllers/productos.controllers";

const router = Router();
// app.get('/prueba',(req,res)=>{
//     res.send('hola desde el backend en la peticion get')
// })

router.route('/productos').get(listarProductos).post(crearProducto);

export default router;