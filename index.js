function Node(val) {
  this.val = val
  this.ptr = null
}

Node.prototype.link= function (node) {
  this.ptr = node
}

function Queue() {
  this.size = 0
  this._first = null
  this._last = null
}

Queue.prototype.push = function (val) {
  var newNode = new Node(val)
  
  if (this._last === null) 
    this._first = newNode
  else
    this._last.link(newNode)
  this._last = newNode

  this.size++
}

Queue.prototype.pop = function() {
  if (this.size === 0) {
    console.error('pop called on an empty queue')
    return
  }

  var rv = this._first.val
  var oldFirst  = this._first
  this._first = oldFirst.ptr
  delete oldFirst 

  if (this._first === null) 
    this._last = null

  this.size--
  return rv
}

Queue.prototype.clear = function () {
  this.size = 0
  this._first = null
  this._last = null
}

Queue.prototype.forEach = function ( cb ) {
  for (var node = this._first; node !== null; node = node.ptr)
    cb(node.val)
}

module.exports = Queue
