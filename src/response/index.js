'use strict'

class Response {
  constructor (server) {
    this.server = server
    this._formatResponse()
  }

  _formatResponse () {
    this.server.ext('onPreResponse', (request, h) => {
      const { response } = request

      if (response.isBoom) {
        const { output } = response
        const { statusCode } = output
        const { message = 'Bad Request' } = output.payload

        return h.response({ status: false, message })
          .code(statusCode)
      }

      return h.continue
    })
  }

  ready () {
    return Promise.resolve(this.server)
  }
}

module.exports = Response
