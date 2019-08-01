'use strict'

const Response = require('../response')

module.exports.registerFormatResponse = async server => {
  try {
    await new Response(server).ready()
    return server
  } catch (err) {
    throw err
  }
}
