import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: { type: String },
  description: { type: String },
  author: { type: String },
  price: { type: Number, default: 0 },
  extension: { type: String, default: ".pdf" },
  publisher: { type: String, default: "" },
  publisherYear: { type: Date, default: Date.now },
  writingYear: { type: Date, default: Date.now },
  categories: { type: Array, default: [] },
  urlImg: { type: String, default: "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg" },
  userUploaderId: { type: String, default: 0 },
  timestamp: { type: Date, default: Date.now }
});

export default model("Book", bookSchema);
