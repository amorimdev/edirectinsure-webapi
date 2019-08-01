'use strict'

class Request {
  constructor (server) {
    this.server = server
    this._formatRequest()
  }

  _formatRequest () {
    this.server.ext('onPreHandler', (request, h) => h.continue)
  }

  ready () {
    return Promise.resolve(this.server)
  }
}

module.exports = Request
