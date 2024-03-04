const express = require("express");
const cors = require('cors');
const app = express();
const port = 5000;

const agenciaRoutes = require('./routes/agenciaRoutes.js');
const alquilerRoutes = require('./routes/alquieresRoutes.js');
const clienteRoutes = require('./routes/clientesRoutes.js');
const vehiculoRoutes = require('./routes/vehiculosRoutes.js');
const SpacesRoutes = require('./routes/spacesRoutes.js')

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());


// rutas
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.use('/api/v1/spaces', SpacesRoutes);

// Ruta de Negocios
app.use('/api/v1/agencias', agenciaRoutes);

// Rutas de alquier
app.use('/api/v1/alquiler', alquilerRoutes);

// Rutas de clientes
app.use('/api/v1/clientes', clienteRoutes);

// Rutas de vehiculos

app.use('/api/v1/vehiculos', vehiculoRoutes);

app.set("trust proxy", true); // trust first proxy

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Bienvenido a la aplicación de gestión de créditos!");
});

app.post("/", (req, res) => {
  res.send("¡Bienvenido a la aplicación de gestión de créditos!");
});

app.put("/", (req, res) => {
  res.send("¡Bienvenido a la aplicación de gestión de créditos!");
});

app.get("/", (req, res) => {
  res.send("¡Hola, bienvenido a la app!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Algo salió mal" });
});

app.use((req, res, next) => {
  res.status(404).send({ error: "Ruta no encontrada" });
});


app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto ${port}`);
});

module.exports = app;
