const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: { type: String },
  lastName: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  role: { type: String, enum: ["admin", "user", "knjiznicar"], default: "user" },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Users", userSchema);
