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
    path: '/tasks/{_id?}',
    options: {
      description: 'Select a task or list all',
      notes: 'Returns 200 with the list',
      tags: [ 'api' ],
      auth: 'jwt',
      handler: SelectHandler,
      validate: SelectValidate
    }
  },
  {
    method: 'POST',
    path: '/tasks',
    options: {
      description: 'Create a task',
      notes: 'Returns 201 with the created task',
      tags: [ 'api' ],
      auth: 'jwt',
      handler: CreateHandler,
      validate: CreateValidate
    }
  },
  {
    method: 'PUT',
    path: '/tasks/{_id}',
    options: {
      description: 'Update a task',
      notes: 'Returns 201 with the task updated',
      tags: [ 'api' ],
      auth: 'jwt',
      handler: UpdateHandler,
      validate: UpdateValidate
    }
  },
  {
    method: 'DELETE',
    path: '/tasks/{_id}',
    options: {
      description: 'Delete a task',
      notes: 'Returns 200 with the task updated',
      tags: [ 'api' ],
      auth: 'jwt',
      handler: DeleteHandler,
      validate: DeleteValidate
    }
  }
]
