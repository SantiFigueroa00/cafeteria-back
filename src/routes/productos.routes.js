import { Router } from "express";
import { check } from "express-validator";
import {
  borrarProductos,
  crearProducto,
  editarProductos,
  listarProductos,
  obtenerProductos,
} from "../controllers/productos.controllers";

const router = Router();

router
  .route("/productos")
  .get(listarProductos)
  .post(
    [
      check("nombreProducto", "El nombre del producto es obligatorio")
        .notEmpty()
        .isLength({ min: 2, max: 50 })
        .withMessage("El producto debe tener entre 2 y 50"),
      check("precio", "El precio es obligatorio")
        .notEmpty()
        .isNumeric()
        .withMessage("El precio debe ser numerico")
        .custom((value) => {
          if (value >= 1 && value <= 10000) {
            return true;
          } else {
            throw new Error("El precio debe estar entre 1 y 10000");
          }
        }),
      check("imagen").matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/).withMessage("Debe encviar una url valida"),
      check("categoria")
        .isIn(["bebida-caliente", "bebida-fria", "dulce", "salado"])
        .withMessage("La categoria debe ser valida"),

    ],
    crearProducto
  );

router
  .route("/productos/:id")
  .get(obtenerProductos)
  .put(editarProductos)
  .delete(borrarProductos);

export default router;
