const express = require('express');
const bodyParser = require('body-parser');
const  cors = require('cors');
import {mongodb,PORT} from './src/config/configDev';
import {connect as ConnectionDB} from './src/DB/db_drone_service';
import {TransportController} from './src/controller/transport.controller';
const app = express();

const transportController = new TransportController();
var corsOptions = {
    origin: "*"
  };

// Connect to MongoDB
ConnectionDB(mongodb.mongoURI,{ useUnifiedTopology: true });
  
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Drone service application." });
});

// transport route 
transportController.TransportController(app);

// set port, listen for request
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });