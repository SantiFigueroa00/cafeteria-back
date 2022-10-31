import Producto from "../models/producto,js";

export const listarProductos = async(req, res) => {
  try {
    //buscar los producto
    const productos = await Producto.find();
    //para filtrar 
    // const productos = await Producto.find({categoria:'salado'})
    res.status(200).json(productos)
  } catch (error) {
    console.log(error)
    res.status(404).json({
        mensaje: 'Error al buscar los productos'
    })
  }
};

export const crearProducto = async (req, res) => {
  try {
    console.log(req.body);
    //validar objeto
    const productoNuevo = new Producto(req.body);
    //guardar el objeto en la base de datos
    await productoNuevo.save();
    res.status(201).json({
      mensaje: "El producto fue creado",
    });

    res.send("aqui tendria que crear un producto");
  } catch (error) {
    console.log(error);
    res.status(201).json({
      mensaje: "error al intentar agregar un producto",
    });
  }
};
