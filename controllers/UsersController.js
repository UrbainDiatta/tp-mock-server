/**
 * The UsersController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/UsersService');
const createUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.createUser);
};

const deleteUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteUser);
};

const getCurrentUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCurrentUser);
};

const getUserById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserById);
};

const searchUsers = async (request, response) => {
  await Controller.handleRequest(request, response, service.searchUsers);
};

const updateCurrentUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateCurrentUser);
};

const updateUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateUser);
};


module.exports = {
  createUser,
  deleteUser,
  getCurrentUser,
  getUserById,
  searchUsers,
  updateCurrentUser,
  updateUser,
};
