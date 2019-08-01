'use strict'

const { omit } = require('lodash')
const { act } = require('../src/app/seneca')
const {
  definePayload,
  defineHttpCode,
  UNAUTHORIZED_MESSAGE
} = require('./definitions')

module.exports.defaultHandler = async (request, h, role, cmd) => {
  try {
    if (!request.auth.credentials) {
      return h.response({ status: false, message: UNAUTHORIZED_MESSAGE })
        .code(401)
    }

    const pattern = { role, cmd }
    const payload = definePayload(request)

    if (request.auth.credentials) {
      payload.credentials = request.auth.credentials
    }

    const response = await act(pattern, payload)

    return h.response(response)
      .code(defineHttpCode(request))
  } catch (err) {
    let message = err && err.message

    message = typeof message === 'object'
      ? omit(message, [ '_object' ])
      : message

    return (err && err.status === false)
      ? h.response({ status: false, message })
        .code(400)
      : h.response({ status: false, message })
        .code(500)
  }
}
