import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export type UserType = {
  _id: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

const UserSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password!, 8);
  }
  next();
});

const User = mongoose.model<UserType>("User", UserSchema);

export default User;
