'use strict'

module.exports.UNAUTHORIZED_MESSAGE = 'Invalid credentials'

module.exports.defineHttpCode = request => {
  const DEFAULT_HTTP_METHOD = 200

  const HTTP_CODES_FOR_METHODS = {
    get: DEFAULT_HTTP_METHOD,
    delete: DEFAULT_HTTP_METHOD,
    put: DEFAULT_HTTP_METHOD,
    post: 201
  }

  return !request.method
    ? DEFAULT_HTTP_METHOD
    : HTTP_CODES_FOR_METHODS[request.method] || DEFAULT_HTTP_METHOD
}

module.exports.definePayload = request => ({
  ...request.payload,
  ...request.params,
  ...request.query,
  ...request.headers
})
