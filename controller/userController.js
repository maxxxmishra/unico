const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Customer = require("../models/customerModel");
const Product = require("../models/productModel");

const createUser = asyncHandler(async (req, res) => {});
const readAllUser = asyncHandler(async (req, res) => {});
const readUserById = asyncHandler(async (req, res) => {});
const updateUser = asyncHandler(async (req, res) => {});
const deleteUser = asyncHandler(async (req, res) => {});

module.exports = {
  createUser,
  readAllUser,
  readUserById,
  updateUser,
  deleteUser,
};
