import { Router } from "express";
import { crearProducto, editarProductos, listarProductos, obtenerProductos } from "../controllers/productos.controllers";

const router = Router();

router.route('/productos').get(listarProductos).post(crearProducto);
router.route('/productos/:id').get(obtenerProductos).put(editarProductos)

export default router;