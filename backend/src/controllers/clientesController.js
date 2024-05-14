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
};

exports.ObetnerCliente = (req, res) => {
  const { cedula_cliente } = req.params;
  Cliente.ObtenerCliente(cedula_cliente, (err, cliente) => {
    if (err) {
      console.error("Error al obtener el cliente:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      if (cliente.length === 0) {
        res.status(404).json({ error: "Cliente no encontrado." });
      } else {
        res.json(cliente[0]);
      }
    }
  });
};

exports.crearCliente = (req, res) => {
  const { cedula_cliente, nombres_cliente, apellidos_cliente, telefono_cliente, direccion_cliente, correo_cliente } = req.body;

  Cliente.crearCliente(
    cedula_cliente,
    nombres_cliente,
    apellidos_cliente,
    telefono_cliente,
    direccion_cliente,
    correo_cliente,
    (err, cliente) => {
      if (err) {
        console.error("Error al crear el cliente:", err);
        res.status(500).json({ error: "Error interno del servidor" });
      } else {
        res.json(cliente);
      }
    }
  );
};

exports.actualizarCliente = (req, res) => {
  const { cedula_cliente } = req.params;
  console.log(cedula_cliente);
  const { nombres_cliente, apellidos_cliente, telefono_cliente, direccion_cliente, correo_cliente } = req.body;

  Cliente.actualizarCliente(
    cedula_cliente,
    nombres_cliente,
    apellidos_cliente,
    telefono_cliente,
    direccion_cliente,
    correo_cliente,
    (err, cliente) => {
      if (err) {
        console.error("Error al actualizar el cliente:", err);
        res.status(500).json({ error: "Error interno del servidor" });
      } else {
        res.json(cliente);
      }
    }
  );
};

exports.eliminarCliente = (req, res) => {
  const { cedula_cliente } = req.params;
  Cliente.eliminarCliente(cedula_cliente, (err, cliente) => {
    if (err) {
      console.error("Error al eliminar el cliente:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(cliente);
    }
  });
};
