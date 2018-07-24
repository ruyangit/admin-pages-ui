'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  BASE_API: '"https://api.douban.com/v2"'
  // BASE_API: '"http://169.254.254.71:9999/seed"'
})
