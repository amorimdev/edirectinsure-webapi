'use strict'

const { pick, omit } = require('lodash')
const { user } = require('../../validate')

/**
 * @description User Validators
 */
module.exports.SelectValidate = {
  params: user.select
}

module.exports.CreateValidate = {
  payload: user.create
}

module.exports.UpdateValidate = {
  params: pick(user.update, [ '_id' ]),
  payload: omit(user.update, [ '_id' ])
}

module.exports.DeleteValidate = {
  params: user.delete
}
