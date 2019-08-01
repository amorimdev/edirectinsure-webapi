'use strict'

const Joi = require('@hapi/joi')

module.exports = {
  login: {
    email: Joi.string()
      .trim()
      .email()
      .required()
      .description('the email of auth'),

    password: Joi.string()
      .optional()
      .description('the password of auth')
  }
}
