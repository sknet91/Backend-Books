import { Document } from "mongoose";

export interface IUser extends Document {
  user_email: string;
  password: string;
  user_role?: string;
  confirmed?: boolean;
  profile_pic?: string;
  name?: string;
  lastname?: string;
  cellphone?: string;
  worksite?: string;
  enterprise?: string;
  country?: string;
  city?: string;
  book_collection: IBook[];
}

export interface IBook extends Document {
  title: string;
  description: string;
  author: string;
  userUploaderId?: string;
  price?: number;
  extension?: string;
  publisher?: string;
  publisherYear?: any;
  writingYear?: any;
  categories?: string[];
  urlImg?: string;
  timestamp?: any;
}
