'use strict'

const { omit } = require('lodash')
const { act } = require('../src/app/seneca')
const {
  definePayload,
  defineHttpCode
} = require('./definitions')

const UNAUTHORIZED = 'Unauthorized'

module.exports.defaultPublicHandler = async (request, h, role, cmd) => {
  try {
    const payload = definePayload(request)
    const pattern = { role, cmd }

    const response = await act(pattern, payload)

    return h.response(response)
      .code(defineHttpCode(request))
  } catch (err) {
    let message = err && err.message

    message = cmd === 'login' && UNAUTHORIZED ||
      typeof message === 'object' && omit(message, [ '_object' ]) ||
      message

    return (err && err.status === false)
      ? h.response({ status: false, message }).code(400)
      : h.response({ status: false, message }).code(500)
  }
}
