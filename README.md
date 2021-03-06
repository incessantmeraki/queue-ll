# queue-ll

[![Build Status](https://travis-ci.org/incessantmeraki/queue-ll.svg?branch=master)](https://travis-ci.org/incessantmeraki/queue-ll)

simple queue data structure using linked list

## Usage

### Example

```js
  var Queue = require('queue-ll')
  var q = new Queue()
  q.push('hello')
  q.push('world')
  console.log(q.pop())
  console.log(q.pop())
```

### API

#### `queue = new Queue()`
Creates a new queue structure 

#### `queue.push(val)`
pushes val into end of the queue 

#### `queue.pop()`
removes element from front of the queue and return it

#### `queue.forEach(cb(value))`
traverses each element of the queue

#### `queue.clear()`
clears all elements of queue

#### `queue.size`
returns length of the queue

## License

MIT
