'use strict'

const Joi = require('@hapi/joi')

module.exports = {
  create: {
    status: Joi.string()
      .valid([ 'open', 'closed' ])
      .default('open')
      .required()
      .description('the status of task'),

    description: Joi.string()
      .trim()
      .required()
      .description('the description of task'),

    project: Joi.string()
      .trim()
      .required()
      .description('the project of task')
  },

  select: {
    _id: Joi.string()
      .trim()
      .optional()
      .description('the id of task')
  },

  update: {
    _id: Joi.string()
      .trim()
      .required()
      .description('the id of task'),

    status: Joi.string()
      .valid([ 'open', 'closed' ])
      .optional()
      .description('the status of task'),

    description: Joi.string()
      .trim()
      .optional()
      .description('the description of task'),

    project: Joi.string()
      .trim()
      .optional()
      .description('the project of task')
  },

  delete: {
    _id: Joi.string()
      .trim()
      .required()
      .description('the id of task')
  }
}
