const cors = require("cors");

//Estas son las rutas que tiene permito el acceso, por lo cual si ingreso de otro lado no lo va permitir a su vez el mismo servidor en si mismo no tiene origin por lo cual consulta sin problema
//en caso si trabajas en el front y necesitas acceso al back configura en array lo siguiente "http://localhost:3000"
const whitelist = ["http://localhost:3000"];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) callback(null, true);
    else callback(new Error("Not allowed by CORS"));
  },
};

module.exports = cors(corsOptions);
