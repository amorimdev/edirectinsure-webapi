'use strict'

const { act } = require('../app/seneca')
const { defineAuthValidTokenPattern } = require('./patterns')
const { defineAuthValidTokenPayload } = require('./payloads')

const defaultOptions = {
  key: process.env.SECRET || 'secret',
  verifyOptions: {
    algorithms: [ 'HS256' ]
  }
}

class AuthJwt {
  constructor (options) {
    this.options = { ...defaultOptions, ...options }
  }

  async _validateFunc (credentials, request) {
    const { headers } = request
    const { authorization: token } = headers
    const pattern = defineAuthValidTokenPattern()
    const payload = defineAuthValidTokenPayload(token)
    return act(pattern, payload)
      .then(({ status: isValid }) => ({ isValid, credentials }))
      .catch(() => ({ isValid: false }))
  }

  strategy () {
    const validate = this._validateFunc.bind(this)
    return { ...this.options, validate }
  }
}

module.exports = AuthJwt
