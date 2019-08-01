'use strict'

const { auth } = require('../../validate')

/**
 * @description Auth Validators
 */
module.exports.LoginValidate = {
  payload: auth.login
}
