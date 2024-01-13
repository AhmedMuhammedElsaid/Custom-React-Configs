const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = (envVars) => {
  const { env } = envVars
  const envConfig = require(`./webpack.${env}.js`)
  const configs = merge(common, envConfig)
  return configs
}
