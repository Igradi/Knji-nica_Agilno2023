const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: { type: String },
  lastName: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  admin: { type: Boolean, default: false },
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
}


module.exports = mongoose.model("Users", userSchema);
