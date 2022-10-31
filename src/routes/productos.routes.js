import { Router } from "express";
import { crearProducto, listarProductos, obtenerProductos } from "../controllers/productos.controllers";

const router = Router();

router.route('/productos').get(listarProductos).post(crearProducto);
router.route('/productos/:id').get(obtenerProductos)

export default router;