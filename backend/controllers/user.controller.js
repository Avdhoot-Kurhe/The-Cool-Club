const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  let userdata = req.body;
  let user = await UserModel.findOne({ email: userdata.email });
  if (user) {
    res.send({ msg: "User already exists" });
  } else {
    bcrypt.hash(
      userdata.password,
     Number( process.env.ROUND),
      async (err, hashpassword) => {
        if (err) {
          res.send({ msg: "Something went wrong", error: err});
        } else {
          userdata.password = hashpassword;
          let newuser = await UserModel.insertMany([userdata]);
          let token = await jwt.sign(
            { email: newuser.email, uid: newuser._id },
            process.env.KEY,
            { expiresIn: "5h" }
          );
          let payload = {
            msg: "Account created successfully",
            user: newuser,
            token: token,
          };
          res.send(payload);
        }
      }
    );
  }
};

const login = async (req, res) => {
  let { email, password } = req.body;
  let user = await UserModel.findOne({ email: email });
  if (user) {
    await bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        let token = jwt.sign({ email, uid: user._id }, process.env.KEY, {
          expiresIn: "5h",
        });
        let payload = {
          msg: "User Loggedin successfully",
          token: token,
        };
        res.send(payload);
      } else {
        res.send({ msg: "Invalid user credentials", error: err });
      }
    });
  } else {
    res.send({ msg: "User does not exist, please signup first" });
  }
};

const getProfile = async (req, res) => {
  let email = req.body.email;
  try {
    const user = await UserModel.findOne({ email: email });
    user.id = user._id;
    res.send(user);
  } catch (err) {
    res.send({ msg: "something went wrong", error: err });
  }
};

const updateProfile = async (req, res) => {
  let update = req.body;
  try {
    const updatestatus = await UserModel.updateOne({ email: update.email },{...update});
    res.send({ updatestatus });
  } catch (err) {
    res.send({ msg: "something went wrong", error: err });
  }
};

const UserController = {
  signup,
  login,
  getProfile,
  updateProfile,
};

module.exports = {
  UserController,
};
