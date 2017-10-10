function Graph(){
    this.nodes = [],
    this.graph = {}
}

Graph.prototype.addNode = function(node){
    //store node in basic array
    this.nodes.push(node);
    
    //store the node in the graph object
    let nodeKey = node.value;
    this.graph[nodeKey] = node;
}

module.exports = Graph;