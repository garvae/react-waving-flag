
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-pie-chart.cjs.production.min.js')
} else {
  module.exports = require('./react-pie-chart.cjs.development.js')
}
