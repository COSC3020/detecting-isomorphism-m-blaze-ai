const assert = require('assert');
const { are_isomorphic } = require('./code');

const graph1 = {
  A: ['B', 'C'],
  B: ['A', 'C'],
  C: ['A', 'B']
};

const graph2 = {
  X: ['Y', 'Z'],
  Y: ['X', 'Z'],
  Z: ['X', 'Y']
};

const graph3 = {
  A: ['B'],
  B: ['A', 'C'],
  C: ['B']
};

assert(are_isomorphic(graph1, graph2) === true);
assert(are_isomorphic(graph1, graph3) === false);
console.log("All tests passed.");
