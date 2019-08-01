'use strict'

const AuthJwt = require('../auth-jwt')

module.exports.registerAuthStrategy = async server => {
  try {
    const authJwt = new AuthJwt()
    server.auth.strategy('jwt', 'jwt', authJwt.strategy())
    return server
  } catch (err) {
    throw err
  }
}
