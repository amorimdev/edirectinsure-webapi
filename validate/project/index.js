'use strict'

const Joi = require('@hapi/joi')

module.exports = {
  create: {
    name: Joi.string()
      .trim()
      .required()
      .description('the name of project')
  },

  select: {
    _id: Joi.string()
      .trim()
      .optional()
      .description('the id of project')
  },

  update: {
    _id: Joi.string()
      .trim()
      .required()
      .description('the id of project'),

    name: Joi.string()
      .trim()
      .optional()
      .description('the name of project')
  },

  delete: {
    _id: Joi.string()
      .trim()
      .required()
      .description('the id of project')
  }
}
