require('../../node_modules/ngn/ngn') // TODO: Remove this when NGN 2 is ready
require('../lib/ngnx')

const pkg = require('../../package.json')
const test = require('tap').test

test('NGNX Sanity Check', t => {
  t.ok(NGN !== undefined, 'NGN namespace exists.')
  t.end()
})
