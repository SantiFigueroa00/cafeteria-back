import { Router } from "express";
import {
  borrarProductos,
  crearProducto,
  editarProductos,
  listarProductos,
  obtenerProductos,
} from "../controllers/productos.controllers";

const router = Router();

router.route("/productos").get(listarProductos).post(crearProducto);
router
  .route("/productos/:id")
  .get(obtenerProductos)
  .put(editarProductos)
  .delete(borrarProductos);

export default router;
