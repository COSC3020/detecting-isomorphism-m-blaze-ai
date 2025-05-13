function are_isomorphic(graph1, graph2) {
    const keys1 = Object.keys(graph1);
  const keys2 = Object.keys(graph2);

  if (keys1.length !== keys2.length)
    return false;

  const n = keys1.length;

  const degree1 = keys1.map(k => graph1[k].length).sort();
  const degree2 = keys2.map(k => graph2[k].length).sort();

  if (degree1.join() !== degree2.join())
    return false;

  function isValidMapping(mapping, g1Node, g2Node) {
    for (const [k1, k2] of mapping.entries()) {
      if (graph1[g1Node].includes(k1)) {
        if (!graph2[g2Node].includes(k2))
          return false;
      }
      if (graph1[k1].includes(g1Node)) {
        if (!graph2[k2].includes(g2Node))
          return false;
      }
    }
    return true;
  }

    function backtrack(mapping, used) {
    if (mapping.size === n)
      return true;

    const unmapped1 = keys1.filter(k => !mapping.has(k));
    const unmapped2 = keys2.filter(k => !used.has(k));
    const next = unmapped1[0];

    for (const g2Node of unmapped2) {
      if (isValidMapping(mapping, next, g2Node)) {
        mapping.set(next, g2Node);
        used.add(g2Node);

        if (backtrack(mapping, used))
          return true;

        mapping.delete(next);
        used.delete(g2Node);
      }
    }

    return false;
  }

  return backtrack(new Map(), new Set());
}

module.exports = { are_isomorphic };