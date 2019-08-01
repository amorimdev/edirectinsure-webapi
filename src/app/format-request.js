'use strict'

const Request = require('../request')

module.exports.registerFormatRequest = async server => {
  try {
    await new Request(server).ready()
    return server
  } catch (err) {
    throw err
  }
}
