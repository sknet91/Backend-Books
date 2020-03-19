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

  // Carpeta Uploads

  routes(app);
  app.listen(3001);
  console.log("Listening on port: 3000");
};

export default startServer;
