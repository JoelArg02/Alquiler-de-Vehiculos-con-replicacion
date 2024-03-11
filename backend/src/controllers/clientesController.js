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
  const { cedula } = req.params;
  Cliente.ObtenerCliente(cedula, (err, cliente) => {
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
  const { cedula, nombres, apellidos, telefono, direccion, correo } = req.body;

  // Ahora pasas 'cedula' como el primer argumento a 'crearCliente'
  Cliente.crearCliente(
    cedula,
    nombres,
    apellidos,
    telefono,
    direccion,
    correo,
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
  const { cedula } = req.params;
  console.log(cedula);
  const { nombres, apellidos, telefono, direccion, correo } = req.body;

  Cliente.actualizarCliente(
    cedula,
    nombres,
    apellidos,
    telefono,
    direccion,
    correo,
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
  const { cedula } = req.params;
  Cliente.eliminarCliente(cedula, (err, cliente) => {
    if (err) {
      console.error("Error al eliminar el cliente:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(cliente);
    }
  });
};
