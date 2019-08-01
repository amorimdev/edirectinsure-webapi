'use strict'

/* eslint node/no-unpublished-require: off */

const {
  defaultHandler,
  defaultPublicHandler
} = require('../../handler')

module.exports.SelectHandler = (request, h) =>
  defaultHandler(request, h, 'task', 'select')

module.exports.CreateHandler = (request, h) =>
  defaultPublicHandler(request, h, 'task', 'create')

module.exports.UpdateHandler = (request, h) =>
  defaultHandler(request, h, 'task', 'update')

module.exports.DeleteHandler = (request, h) =>
  defaultHandler(request, h, 'task', 'delete')
