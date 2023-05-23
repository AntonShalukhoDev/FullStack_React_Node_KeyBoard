const jwt = require('jsonwebtoken');
const TokenModel = require('../models/token-model.js');
const UserDto = require('../dtos/user-dto.js');
const UserModel = require('../models/user-model.js')
const ApiError = require('../exceptions/api-error.js')

class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '60m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '90d'})

        return {accessToken, refreshToken}
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            return userData
        } catch (e) {
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
            return userData
        } catch (e) {
            return null
        }
    }

    async getToken(person) {
        const userDto = new UserDto(person)
        const tokens = this.generateToken({...userDto})
        await this.savaToken(userDto.id, tokens.refreshToken);
        return  {...tokens, user: userDto}
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
    
        const userData = this.validateRefreshToken(refreshToken);
        const tokenDB = await this.findToken(refreshToken);
        if(!userData || !tokenDB) {
            throw ApiError.UnauthorizedError();
        }
    
        const user = await UserModel.findById(userData.id)
        const tokens = await this.getToken(user)
    
        return tokens
    }

    async savaToken(userId, refreshToken) {
        const tokenData = await TokenModel.findOne({userId});
        if(tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save()
        }

        const token = await TokenModel.create({user: userId, refreshToken})
        return token
    }

    async removeToken(refreshToken) {
        const tokenData = TokenModel.deleteOne({refreshToken})
        return tokenData
    }

    async findToken(refreshToken) {
        const tokenData = await TokenModel.findOne({refreshToken});
        return tokenData
    }
}

module.exports = new TokenService