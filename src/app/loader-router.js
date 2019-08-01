'use strict'

const Loader = require('../loader')

const RouterOptions = {
  path: 'app/**/index.js',
  namespace: 'route'
}

module.exports.registerLoaderRouter = async server => {
  try {
    const routes = await new Loader(RouterOptions).ready()

    if (!Array.isArray(routes) || Array.isArray(routes) && !routes.length) {
      throw new Error(`App Promise Configure Routes: the routes are empty`)
    }

    server.route(routes)
    return server
  } catch (err) {
    throw err
  }
}
