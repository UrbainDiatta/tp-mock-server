/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Créer un profil utilisateur
* Création d'un profil métier après création de l'utilisateur dans Keycloak. 
*
* createUserRequest CreateUserRequest 
* returns User
* */
const createUser = ({ createUserRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createUserRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Supprimer un utilisateur
*
* userId UUID 
* no response value expected for this operation
* */
const deleteUser = ({ userId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Récupérer le profil de l'utilisateur connecté
*
* returns User
* */
const getCurrentUser = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Obtenir un utilisateur par ID
*
* userId UUID 
* returns User
* */
const getUserById = ({ userId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Rechercher les utilisateurs
*
* name String  (optional)
* email String  (optional)
* type UserType  (optional)
* page Integer  (optional)
* size Integer  (optional)
* returns UserPage
* */
const searchUsers = ({ name, email, type, page, size }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
        email,
        type,
        page,
        size,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Modifier son propre profil
*
* updateUserRequest UpdateUserRequest 
* returns User
* */
const updateCurrentUser = ({ updateUserRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        updateUserRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Modifier un utilisateur
*
* userId UUID 
* updateUserRequest UpdateUserRequest 
* returns User
* */
const updateUser = ({ userId, updateUserRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userId,
        updateUserRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createUser,
  deleteUser,
  getCurrentUser,
  getUserById,
  searchUsers,
  updateCurrentUser,
  updateUser,
};
