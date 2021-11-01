'use strict'

const Hapi = require('@hapi/hapi')

const { registerPlugins } = require('./plugins')
const { registerAuthStrategy } = require('./auth')
const { registerLoaderRouter } = require('./loader-router')
const { registerFormatRequest } = require('./format-request')
const { registerFormatResponse } = require('./format-response')

const ServerOptions = {
  port: process.env.APP_PORT || process.env.PORT || 3000,
  routes: {
    validate: { options: { abortEarly: false } },
    cors: {
      origin: 'ignore'
    }
  }
}

module.exports.ApplicationServer = new Promise((resolve, reject) => {
  try {
    const Server = Hapi.Server(ServerOptions)

    return registerPlugins(Server)
      .then(registerAuthStrategy)
      .then(registerLoaderRouter)
      .then(registerFormatRequest)
      .then(registerFormatResponse)
      .then(resolve)
      .catch(reject)
  } catch (err) {
    reject(err)
  }
})
