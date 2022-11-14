import { validationResult } from "express-validator";
import Producto from "../models/producto.js";

export const listarProductos = async (req, res) => {
  try {
    //buscar los producto
    const productos = await Producto.find();
    //para filtrar
    // const productos = await Producto.find({categoria:'salado'})
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los productos",
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
    console.log(req.body);
    //validar objeto
    const errors = validationResult(req);
    // console.log(errors.isEmpty()) devuelve false si hay errores
    if(!errors.isEmpty()){
        return res.status(400).json({
            listaError: errors.array()
          });
    }
    const productoNuevo = new Producto(req.body);
    //guardar el objeto en la base de datos
    await productoNuevo.save();
    res.status(201).json({
      mensaje: "El producto fue creado",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "error al intentar agregar un producto",
    });
  }
};

export const obtenerProductos = async (req, res) => {
  try {
    //obtener el parametro
    console.log(req.params.id);
    //buscar en la db el producto
    const productoBuscado = await Producto.findById(req.params.id);
    //reponder al frontend
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar un producto",
    });
  }
};
export const editarProductos = async (req, res) => {
  try {
    //obtener parametro (req.params.id) y body validados (req.body) 
    //guardar en db
    await Producto.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({
        mensaje: "El producto fue editado correctamente",
      });
  } catch (error) {
    console.log(error)
    res.status(400).json({
        mensaje: "Error al editar un producto",
      });
    }
};
export const borrarProductos = async (req, res) => {
  try {
    //obtener parametro (req.params.id)
    //borrar de db
    await Producto.findByIdAndDelete(req.params.id)
    res.status(200).json({
        mensaje: "El producto fue borrado correctamente",
      });
  } catch (error) {
    console.log(error)
    res.status(404).json({
        mensaje: "Error al intentar borrar un producto",
      });
    }
};
