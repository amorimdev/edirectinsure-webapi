'use strict'

const {
  SelectHandler,
  CreateHandler,
  UpdateHandler,
  DeleteHandler
} = require('./handler')

const {
  SelectValidate,
  CreateValidate,
  UpdateValidate,
  DeleteValidate
} = require('./validate')

module.exports.default = [
  {
    method: 'GET',
    path: '/users/{_id?}',
    options: {
      description: 'Select a user or list all',
      notes: 'Returns 200 with the list',
      tags: [ 'api' ],
      auth: 'jwt',
      handler: SelectHandler,
      validate: SelectValidate
    }
  },
  {
    method: 'POST',
    path: '/users',
    options: {
      description: 'Create a user',
      notes: 'Returns 201 with the created user',
      tags: [ 'api' ],
      handler: CreateHandler,
      validate: CreateValidate
    }
  },
  {
    method: 'PUT',
    path: '/users/{_id}',
    options: {
      description: 'Update a user',
      notes: 'Returns 201 with the user updated',
      tags: [ 'api' ],
      auth: 'jwt',
      handler: UpdateHandler,
      validate: UpdateValidate
    }
  },
  {
    method: 'DELETE',
    path: '/users/{_id}',
    options: {
      description: 'Delete a user',
      notes: 'Returns 200 with the user updated',
      tags: [ 'api' ],
      auth: 'jwt',
      handler: DeleteHandler,
      validate: DeleteValidate
    }
  }
]
