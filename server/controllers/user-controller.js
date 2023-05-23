const ApiError = require("../exceptions/api-error");
const UserService = require("../services/user-service");
const {validationResult} = require('express-validator');
const UserModel = require('../models/user-model')

class UserController {
    
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validations Error', errors.array()))
            }

            const {name, email, password} = req.body;
            const userData = await UserService.registration(name, email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 90 * 24 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await UserService.login(email, password);
            res.cookie('refreshToken', userData.tokens.refreshToken, {maxAge: 90 * 24 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await UserService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e)
        }
    }

    async changeName(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const {newName} = req.body;
            const userData = await UserService.changeName(newName, refreshToken);
            return res.json('Nema has been chenged')
        } catch (e) {
            next(e)
        }
    }   

    // DEV REQUEST for ALL USERS
    async getUsers(req, res, next) {
        try {
            const users = await UserModel.find()
            return res.json(users)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController