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
    path: '/projects/{_id?}',
    options: {
      description: 'Select a project or list all',
      notes: 'Returns 200 with the list',
      tags: [ 'api' ],
      auth: 'jwt',
      handler: SelectHandler,
      validate: SelectValidate
    }
  },
  {
    method: 'POST',
    path: '/projects',
    options: {
      description: 'Create a project',
      notes: 'Returns 201 with the created project',
      tags: [ 'api' ],
      auth: 'jwt',
      handler: CreateHandler,
      validate: CreateValidate
    }
  },
  {
    method: 'PUT',
    path: '/projects/{_id}',
    options: {
      description: 'Update a project',
      notes: 'Returns 201 with the project updated',
      tags: [ 'api' ],
      auth: 'jwt',
      handler: UpdateHandler,
      validate: UpdateValidate
    }
  },
  {
    method: 'DELETE',
    path: '/projects/{_id}',
    options: {
      description: 'Delete a project',
      notes: 'Returns 200 with the project updated',
      tags: [ 'api' ],
      auth: 'jwt',
      handler: DeleteHandler,
      validate: DeleteValidate
    }
  }
]
