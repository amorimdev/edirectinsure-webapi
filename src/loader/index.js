'use strict'

const { glob } = require('glob')
const { join } = require('path')

const LoaderDefaultOptions = {
  cwd: process.cwd()
}

const RequiredOptions = [ 'cwd', 'namespace', 'path' ]

class Loader {
  constructor (options) {
    this.options = { ...LoaderDefaultOptions, ...options }

    for (let option of RequiredOptions) {
      if (!this.options[option]) {
        throw new Error(`Loader Options ${option} param is required`)
      }
    }
  }

  async _globAllFiles (path) {
    return new Promise((resolve, reject) => {
      glob(path, (err, files) => {
        if (err) return reject(err)
        return resolve(files)
      })
    })
  }

  async _loadAllFiles (files) {
    if (!Array.isArray(files) || Array.isArray(files) && !files.length) {
      throw new Error('The Glob Files are empty')
    }

    return Promise.all(files.map(filepath => require(filepath)))
  }

  async _reduceFiles (routes) {
    return routes.reduce((collection, route) => {
      collection = collection.concat(route.default)
      return collection
    }, [])
  }

  async ready () {
    const loaderPath = join(this.options.cwd, this.options.path)
    const files = await this._globAllFiles(loaderPath)
    const routes = await this._reduceFiles(await this._loadAllFiles(files))
    return routes
  }
}

module.exports = Loader
