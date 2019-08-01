'use strict'

const {
  defaultHandler,
  defaultPublicHandler
} = require('../../handler')

module.exports.LoginHandler = (request, h) =>
  defaultPublicHandler(request, h, 'auth', 'login')

module.exports.LogoutHandler = (request, h) =>
  defaultHandler(request, h, 'auth', 'logout')
