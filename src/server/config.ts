import * as express from "express";
import initDB from "../database/init";
import routes from "../router/routes";
import * as cors from 'cors';


const app = express();

const startServer = async () => {
  await initDB();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Port
  app.set('port', process.env.PORT || 3000);

  // Carpeta Uploads

  routes(app);
  app.listen(app.get('port'));
  console.log("Listening on port: ", app.get('port'));
};

export default startServer;
