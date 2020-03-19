import { model, Schema } from "mongoose";

const userSchema = new Schema({
  password: { type: String },
  user_email: { type: String },
  user_role: { type: String, default: "unconfirmed" },
  confirmed: { type: Boolean, default: false },
  profile_pic: { type: String, default: "" },
  book_collection: { type: Array, default: [] },
  name: { type: String, default: "" },
  lastname: { type: String, default: "" },
  cellphone: { type: String, default: "" },
  worksite: { type: String, default: "" },
  enterprise: { type: String, default: "" },
  country: { type: String, default: "" },
  city: { type: String, default: "" }
});

export default model("User", userSchema);
