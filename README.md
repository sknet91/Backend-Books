# Backend-Books
Backend for books aplication

## Rutas

Rutas del backend estable:

.get
/user - Obtener todos los usuarios
/user/:userId - Obtener la información de un usuario específico
/books - Obtener todos los libros.
/books/:bookId - Obtener un libro específico.
/books/:userId - Obtener los libros por un usuario especifico
/getImage/:userId - Obtener el avatar de un usuario especifico

.post
/user - Crear un usuario (Campos obligatorios: { user_email: string, password: string })
/books - Crear un libro (Campos obligatorios: { title: string, description: string, author: string, userUploaderId: string })
/user/addBook/:userId - Agregar un libro en la colección del usuario. (Los campos obligatorios dependen de dos cosas: Si el libro ya está creado, añaden la id del libro a la query
Ejemplo:
https://e10185bc.ngrok.io/user/addBook/asd65sd2a35?bookId=56465as4d6asd45
Osea, lo único extra que añaden es ?bookId=ID_DEL_LIBRO
O, si lo desean, mandan solamente la Id del usuario y todos los campos obligatorios para un libro nuevo. 

.put
/user/:userId - Actualizar la info de un usuario
/book/:bookId - Actualizar la info de un libro.

.delete
/user/:userId - Borrar un usuario específico
/books/:bookId - Borrar un libro específico.
