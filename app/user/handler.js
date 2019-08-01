'use strict'

/* eslint node/no-unpublished-require: off */

const {
  defaultHandler,
  defaultPublicHandler
} = require('../../handler')

module.exports.SelectHandler = (request, h) =>
  defaultHandler(request, h, 'user', 'select')

module.exports.CreateHandler = (request, h) =>
  defaultPublicHandler(request, h, 'user', 'create')

module.exports.UpdateHandler = (request, h) =>
  defaultHandler(request, h, 'user', 'update')

module.exports.DeleteHandler = (request, h) =>
  defaultHandler(request, h, 'user', 'delete')
