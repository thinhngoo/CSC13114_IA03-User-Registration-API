import mongoose, { Document } from "mongoose";

export type User = {
  id: string;
  email: string;
  password: string;
};
type UserDocument = User & Document;

export const UserSchema = new mongoose.Schema<UserDocument>({
  email: { type: String, required: true },
  password: { type: String, required: true },
});
