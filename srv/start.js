'use strict'

const { ApplicationServer } = require('../src/app')
const { SenecaClient } = require('../src/seneca')

SenecaClient()
  .then(seneca => {
    require('../src/app/seneca').setInstance(seneca)

    return ApplicationServer
      .then(server => server.start())
      .then(() => console.log('Server started'))
  })
  .catch(err => console.error(err))
