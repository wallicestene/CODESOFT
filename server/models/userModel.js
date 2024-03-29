import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static login method

userSchema.statics.logIn = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }
  const match = await bcryptjs.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};

// static signUp method

userSchema.statics.signUp = async function (
  username,
  profile,
  email,
  password
) {
  if (!username || !email || !password) {
    throw Error("All fields must be filled");
  }
  // validating the inputs
  if (!validator.isEmail(email)) {
    throw Error("Please enter a valid email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }
  const exist = await this.findOne({ email });
  if (exist) {
    throw Error("Email is already in use");
  }

  //hashing the password before saving it to database
  const salt = await bcryptjs.genSalt(10);
  const hash = await bcryptjs.hash(password, salt);

  //   creating the user
  const user = await this.create({ username, profile, email, password: hash });
  return user;
};
export default mongoose.model("User", userSchema);
