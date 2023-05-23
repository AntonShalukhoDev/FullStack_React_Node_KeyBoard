const TokenService = require('../services/token-service');

class TokenController {
  async refresh(req, res, next) {
    try {
        const { refreshToken } = req.cookies;
        const userData = await TokenService.refresh(refreshToken);
        res.cookie('refreshToken', userData.refreshToken, {maxAge: 90 * 24 * 60 * 1000, httpOnly: true})
        return res.json(userData);
    } catch (e) {
        next(e)
    }
  }
}

module.exports = new TokenController 