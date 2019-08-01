'use strict'

const {
  LoginHandler,
  LogoutHandler
} = require('./handler')
const {
  LoginValidate
} = require('./validate')

module.exports.default = [
  {
    method: 'POST',
    path: '/auth/login',
    options: {
      description: 'Validate the credentials to login',
      notes: 'Returns 200 with the token and user',
      tags: [ 'api' ],
      handler: LoginHandler,
      validate: LoginValidate
    }
  },
  {
    method: 'POST',
    path: '/auth/logout',
    options: {
      description: 'Logout a user',
      notes: 'Returns 200',
      tags: [ 'api' ],
      auth: 'jwt',
      handler: LogoutHandler
    }
  }
]
