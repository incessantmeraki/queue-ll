var tape = require('tape')
var Queue = require('./index.js')


tape('basic operations', function (t) {
  var q = new Queue()

  t.equal(q.size,0)

  q.push('hello')
  q.push('world')
  t.equal(q.size, 2)

  t.equal(q.pop(), 'hello')
  t.equal(q.pop(), 'world')
  t.equal(q.size, 0)
  t.end()
})
