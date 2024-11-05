import mongoose from "mongoose";
import { UserSchema } from "./schema";
import type { Document } from "mongoose";
import type { User } from "./schema";

(async () =>
  await mongoose
    .connect(process.env.DB_HOST || "")
    .then(() => {
      console.log("[MongoDB]: Database connected");
    })
    .catch(() => {
      console.error("[MongoDB]: Database connection failed");
    }))();

type UserDocument = User & Document;
export const UserModel = mongoose.models.User || mongoose.model<UserDocument>("User", UserSchema);
