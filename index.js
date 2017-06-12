import * as a from '@jwalsh/mod-a'
import * as b from '@jwalsh/mod-b'
import * as c from '@jwalsh/mod-c'

console.log('mod-d loaded')

let _ = function(n) {


  console.log('mod-d v1', n); return n;
  console.log('Updated a to v2')

  console.log(a._(1))
  console.log(b._(2))
  console.log(c._(3))

  return n;
};

export { _ }
