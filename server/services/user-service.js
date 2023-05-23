const ApiError = require('../exceptions/api-error');
const UserModel = require('../models/user-model.js');
const bcryptjs = require('bcryptjs');
const TokenService = require('./token-service')

class UserService {

    async registration(name, email, password) {
        const candidate = await UserModel.findOne({email});
        if(candidate) {
            throw ApiError.BadRequest(`User with email ${email} has been registred`)
        }

        const hashPass = await bcryptjs.hash(password, 7)
        const user = await UserModel.create({name, email, password: hashPass})
        const tokens = await TokenService.getToken(user)

        return tokens
    }

    async login(email, password) {
        const user = await UserModel.findOne({email});
        if(!user) {
            throw ApiError.BadRequest('User not found')
        }

        const isPassEquats = await bcryptjs.compare(password, user.password)
        if(!isPassEquats) {
            throw ApiError.BadRequest('Wrong password')
        }

        const tokens = await TokenService.getToken(user)
        return {tokens, name: user.name}
    }

    async logout(refreshToken) {
        const token = await TokenService.removeToken(refreshToken);
        return token
    }

    async changeName(newName, refreshToken) {
        if(!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        const userData = TokenService.validateRefreshToken(refreshToken);
        if(!userData) {
            throw ApiError.UnauthorizedError()
        }

        const user = await UserModel.findById(userData.id);
        user.name = newName;
        await user.save()

        const tokens = await TokenService.getToken(user);
        return tokens
    }
}



module.exports = new UserService