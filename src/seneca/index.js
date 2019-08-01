'use strict'

module.exports.SenecaClient = () => new Promise((resolve, reject) => {
  const seneca = require('seneca')()

  seneca.client({
    type: 'http',
    host: process.env.AUTH_HOST || '0.0.0.0',
    port: process.env.AUTH_PORT || 8201,
    pin: { role: 'auth', cmd: '*' }
  })

  seneca.client({
    type: 'http',
    host: process.env.USER_HOST || '0.0.0.0',
    port: process.env.USER_PORT || 8202,
    pin: { role: 'user', cmd: '*' }
  })

  seneca.client({
    type: 'http',
    host: process.env.PROJECT_HOST || '0.0.0.0',
    port: process.env.PROJECT_PORT || 8203,
    pin: { role: 'project', cmd: '*' }
  })

  seneca.client({
    type: 'http',
    host: process.env.TASK_HOST || '0.0.0.0',
    port: process.env.TASK_PORT || 8204,
    pin: { role: 'task', cmd: '*' }
  })

  seneca.ready(err => {
    if (err) {
      return reject(err)
    }

    return resolve(seneca)
  })
})
