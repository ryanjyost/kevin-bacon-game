/*
    Node object where value is the movi

    type: 'movie' or 'actor'

*/




function Node(id, type){
    this.id = id, //actor or movie ID
    this.type = type || null,
    this.edges = [],
    this.parent = null,
    this.searched = false
}

//add neighboring node as edge to a node
//also set the 'this' node as neighbor of the edge node being set
Node.prototype.addEdge = function(neighbor){
    this.edges.push(neighbor);
    neighbor.edges.push(this);
}

module.exports = Node;