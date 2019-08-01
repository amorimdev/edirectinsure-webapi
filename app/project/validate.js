'use strict'

const { pick, omit } = require('lodash')
const { project } = require('../../validate')

/**
 * @description User Validators
 */
module.exports.SelectValidate = {
  params: project.select
}

module.exports.CreateValidate = {
  payload: project.create
}

module.exports.UpdateValidate = {
  params: pick(project.update, [ '_id' ]),
  payload: omit(project.update, [ '_id' ])
}

module.exports.DeleteValidate = {
  params: project.delete
}
