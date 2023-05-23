const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Customer = require("../models/customerModel");
const Product = require("../models/productModel");

const createCustomer = asyncHandler(async (req, res) => {});
const readAllCustomer = asyncHandler(async (req, res) => {});
const readCustomerById = asyncHandler(async (req, res) => {});
const updateCustomer = asyncHandler(async (req, res) => {});
const deleteCustomer = asyncHandler(async (req, res) => {});

module.exports = {
  createCustomer,
  readAllCustomer,
  readCustomerById,
  updateCustomer,
  deleteCustomer,
};
