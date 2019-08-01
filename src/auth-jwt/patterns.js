'use strict'

module.exports.defineAuthValidTokenPattern = () =>
  ({ role: 'auth', cmd: 'valid-token' })
