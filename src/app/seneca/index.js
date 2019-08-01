'use strict'

const LOG_TAG = 'LOG::[WEBAPI | SENECA]'

module.exports.setInstance = seneca => {
  if (!this.seneca || typeof this.seneca !== 'object') {
    this.seneca = seneca
  }
}

module.exports.getInstance = () => this.seneca

module.exports.act = (pattern, payload) =>
  new Promise((resolve, reject) => {
    try {
      this.seneca.act(pattern, payload, (err, response) => {
        if (err) {
          this.seneca.log.fatal(LOG_TAG, err.message || err)
          return reject(err)
        }

        if (!response.status) {
          this.seneca.log.error(LOG_TAG, response)
          return reject(response)
        }

        return resolve(response)
      })
    } catch (err) {
      this.seneca.log.fatal(LOG_TAG, err.message || err)
      reject(err)
    }
  })
