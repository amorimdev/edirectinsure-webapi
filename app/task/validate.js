'use strict'

const { pick, omit } = require('lodash')
const { task } = require('../../validate')

/**
 * @description User Validators
 */
module.exports.SelectValidate = {
  params: task.select
}

module.exports.CreateValidate = {
  payload: task.create
}

module.exports.UpdateValidate = {
  params: pick(task.update, [ '_id' ]),
  payload: omit(task.update, [ '_id' ])
}

module.exports.DeleteValidate = {
  params: task.delete
}
