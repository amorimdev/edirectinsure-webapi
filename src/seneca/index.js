'use strict'

module.exports.SenecaClient = () => new Promise((resolve, reject) => {
  const seneca = require('seneca')()

  seneca.client({
    type: process.env.AUTH_TRANSPORT || 'http',
    host: process.env.AUTH_HOST || '0.0.0.0',
    port: process.env.AUTH_PORT || 8201,
    protocol: process.env.AUTH_PROTOCOL || 'http',
    pin: { role: 'auth', cmd: '*' }
  })

  seneca.client({
    type: process.env.USER_TRANSPORT || 'http',
    host: process.env.USER_HOST || '0.0.0.0',
    port: process.env.USER_PORT || 8202,
    protocol: process.env.USER_PROTOCOL || 'http',
    pin: { role: 'user', cmd: '*' }
  })

  seneca.client({
    type: process.env.PROJECT_TRANSPORT || 'http',
    host: process.env.PROJECT_HOST || '0.0.0.0',
    port: process.env.PROJECT_PORT || 8203,
    protocol: process.env.PROJECT_PROTOCOL || 'http',
    pin: { role: 'project', cmd: '*' }
  })

  seneca.client({
    type: process.env.TASK_TRANSPORT || 'http',
    host: process.env.TASK_HOST || '0.0.0.0',
    port: process.env.TASK_PORT || 8204,
    protocol: process.env.TASK_PROTOCOL || 'http',
    pin: { role: 'task', cmd: '*' }
  })

  seneca.ready(err => {
    if (err) {
      return reject(err)
    }

    return resolve(seneca)
  })
})
