'use strict'

const Joi = require('@hapi/joi')

module.exports = {
  create: {
    name: Joi.string()
      .trim()
      .required()
      .description('the name of user'),

    email: Joi.string()
      .trim()
      .email()
      .required()
      .description('the email of user'),

    password: Joi.string()
      .optional()
      .description('the password of user')
  },

  select: {
    _id: Joi.string()
      .trim()
      .optional()
      .description('the id of user'),

    email: Joi.string()
      .trim()
      .email()
      .optional()
      .description('the email of user')
  },

  update: {
    _id: Joi.string()
      .trim()
      .required()
      .description('the id of user'),

    name: Joi.string()
      .trim()
      .optional()
      .description('the name of user'),

    email: Joi.string()
      .trim()
      .email()
      .optional()
      .description('the email of user'),

    password: Joi.string()
      .optional()
      .description('the password of user')
  },

  delete: {
    _id: Joi.string()
      .trim()
      .required()
      .description('the id of user')
  }
}
