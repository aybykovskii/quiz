import { Router } from "express";
const SignUp = require("./SignUp");
const SignIn = require("./SignIn");
const SignOut = require("./SignOut");
const auth = Router();

auth.post("/register", SignUp);
auth.post("/login", SignIn);
auth.post("/logout", SignOut);

module.exports = auth;
