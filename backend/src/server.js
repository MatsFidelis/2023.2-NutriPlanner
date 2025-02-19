const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const dotenv = require("dotenv");

const pacienteRoutes = require("./routes/pacienteRoutes.js");
const consultaRoutes = require("./routes/consultaRoutes.js");
const treinoRoutes = require('./routes/treinoRoutes.js');

const rotaDieta = require('./routes/dieta.js');

dotenv.config();

// forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
);
 
app.use(express.json());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

require("./db/connection.js");

app.use('/pacientes', pacienteRoutes);
app.use('/consultas', consultaRoutes);
app.use('/treinos', treinoRoutes);
app.use('/dietas', rotaDieta);
