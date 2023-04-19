const usersModel = require("../models/usersModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const users =  async (req, res) => {
    try {
      const users = await usersModel.find();
      res.status(200).json({ status: "success", data: users });
    } catch (err) {
      res.status(500).json({ status: 500, message : err.message,data: []});
    }
  }


  const postUser =  async (req, res) => {
    try {
      const users = await usersModel.find({ username : req.body.username });
      const password = req.body.password
      const hashedPassword = await bcrypt.hash(password, 10)
      const email = validator.isEmail(req.body.email);

      if(!email) return res.status(400).json({ status: 400, message: "Invalid email format", data: [] });
      if(users.length > 0) return res.status(409).json({ status: 409, message : "Username already exists", data: [] });
      
      const postUsers = await usersModel.create({
        username : req.body.username,
        email : req.body.email,
        password : hashedPassword,
        profilePic : req.body.profilePic,
        city : req.body.city,
      });

      if(!postUsers) return res.status(500).json({ status: 500, message: "Failed to create user", data: [] });    
      res.status(201).json({ status: "success", message: "User created successfully", data: postUsers });

    } catch (err) {
      res.status(500).json({ status: 500, message : err.message,  data: []});
    }
  }

  const loginUser = async (req, res) => {
    try {
      const loginUsers = await usersModel.findOne({ username : req.body.username });
      if(!loginUsers) return res.status(404).json({ status: 404, message: "User not found", data: [] });
      const password = req.body.password;
      const hashedPassword = await bcrypt.compare(password, loginUsers.password);
      if(!hashedPassword) return res.status(400).json({ status: 400, message: "Invalid password", data: [] });
  
      // Save user data to cookie
      const user = {
        id: loginUsers._id,
        username: loginUsers.username,
        email: loginUsers.email,
        profilePic: loginUsers.profilePic,
        city: loginUsers.city
      };
      res.cookie("user", JSON.stringify(user), { maxAge: 3600000 });
  
      res.status(200).json({ status: "success", message: "User logged in successfully", data: loginUsers });
    } catch (err) {
      res.status(500).json({ status: 500, message : err.message,  data: []});
    }
  }
  
  const logoutUser = (req, res) => {
    try {
      res.clearCookie("user");
      res.status(200).json({ status: "success", message: "User logged out successfully", data: [] });
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message, data: [] });
    }
  }
module.exports = {users,postUser,loginUser,logoutUser}