const Cliente = require("../models/clientes.js"); // Asegúrate de que la ruta sea correcta

exports.obtenerClientes = (req, res) => {
  Cliente.obtenerClientes((err, clientes) => {
    if (err) {
      console.error("Error al obtener los clientes:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(clientes);
    }
  });
}

exports.crearCliente = (req, res) => {
  const { nombres, apellidos, telefono, direccion, correo } = req.body;
  Cliente.crearCliente(nombres, apellidos, telefono, direccion, correo, (err, cliente) => {
    if (err) {
      console.error("Error al crear el cliente:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(cliente);
    }
  });
}

exports.actualizarCliente = (req, res) => {
  const { cedula, nombres, apellidos, telefono, direccion, correo } = req.body;
  Cliente.actualizarCliente(cedula, nombres, apellidos, telefono, direccion, correo, (err, cliente) => {
    if (err) {
      console.error("Error al actualizar el cliente:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(cliente);
    }
  });
}

exports.eliminarCliente = (req, res) => {
  const { cedula } = req.body;
  Cliente.eliminarCliente(cedula, (err, cliente) => {
    if (err) {
      console.error("Error al eliminar el cliente:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(cliente);
    }
  });
}
