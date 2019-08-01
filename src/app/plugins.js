'use strict'

const HapiJwt = require('hapi-auth-jwt2/lib/index')
const Inert = require('@hapi/inert')
const Vision = require('@hapi/vision')
const HapiSwagger = require('hapi-swagger')
const CorsHeaders = require('hapi-cors-headers')

const HapiSwaggerOptions = {
  info: {
    'title': 'EDirectInsure Webapi Documentation',
    'version': '1.0.0'
  },
  jsonEditor: true,
  debug: true
}

module.exports.registerPlugins = async server => {
  try {
    const Plugins = [
      HapiJwt,
      Inert,
      Vision,
      { plugin: HapiSwagger, options: HapiSwaggerOptions }
    ]

    await server.register(Plugins)
    server.ext('onPreResponse', CorsHeaders)

    return server
  } catch (err) {
    throw err
  }
}
