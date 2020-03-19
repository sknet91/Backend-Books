import uploads from "../libs/multer";
import { Application, Router, Request, Response } from "express";
import {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  login,
  saveABookIntoUser,
  createPhoto,
  getImg
} from "../controllers/user";
import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  getBooksUser
} from "../controllers/books";


const router = Router();

export default (app: Application) => {
  router
    .route("/")
    .all((_: Request, res: Response) =>
      res.send(
        'Esta no es la página principal. El endpoint de las rutas son: "...com/user", "...com/books o, de solicitarlo por id para cambios u otra cosa "...com/user/:id" y lo mismo con books.'
      )
    );
  router
    .route("/user")
    .get(getUsers)
    .post(createUser)
    .all((req: Request, res: Response) => {
      res.send(
        `El método "${req.method.toUpperCase()}" no existe dentro de la ruta /user`
      );
    });

  router.post("/pruebas/:userId", uploads.single('profile_pic'), createPhoto);


  router.post("/user/login", login);

  router
    .route("/user/:userId")
    .get(getUser)
    .put(uploads.single('profile_pic'), updateUser)
    .delete(deleteUser)
    .all((req: Request, res: Response) => {
      res.send(
        `El método "${req.method.toUpperCase()}" no existe dentro de la ruta /user/:userId`
      );
    });

  router
    .route("/getImage/:userId")
    .get(getImg)
    .all((req: Request, res: Response) => {
      res.send(
        `El método "${req.method.toUpperCase()}" no existe dentro de la ruta /user/:userId`
      );
    });

  router
    .route("/books/:userId")
    .get(getBooksUser)
    .all((req: Request, res: Response) => {
      res.send(
        `El método "${req.method.toUpperCase()}" no existe dentro de la ruta /user/:userId`
      );
    });


  router
    .route("/books")
    .get(getBooks)
    .post(createBook)
    .all((req: Request, res: Response) => {
      res.send(
        `El método "${req.method.toUpperCase()}" no existe dentro de la ruta /books`
      );
    });
  // 5e61fe74c881a309f108a04a
  router
    .route("/books/:bookId")
    .get(getBook)
    .put(updateBook)
    .delete(deleteBook)
    .all((req: Request, res: Response) => {
      res.send(
        `El método "${req.method.toUpperCase()}" no existe dentro de la ruta /books/:bookId`
      );
    });

  router.post("/user/addBook/:userId", saveABookIntoUser);

  app.use(router);

  router.all("*", (req: Request, res: Response) => {
    res.send(
      `La ruta "${req.originalUrl}" no existe dentro de ningún método que pueda enrutarlo.`
    );
  });

  return app;
};
