'use strict'

/* eslint node/no-unpublished-require: off */

const {
  defaultHandler,
  defaultPublicHandler
} = require('../../handler')

module.exports.SelectHandler = (request, h) =>
  defaultHandler(request, h, 'project', 'select')

module.exports.CreateHandler = (request, h) =>
  defaultPublicHandler(request, h, 'project', 'create')

module.exports.UpdateHandler = (request, h) =>
  defaultHandler(request, h, 'project', 'update')

module.exports.DeleteHandler = (request, h) =>
  defaultHandler(request, h, 'project', 'delete')
