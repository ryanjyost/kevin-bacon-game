var mysql = require('mysql');
var Node = require('./nodeObject.js');
var Graph = require('./Graph.js');

//define local SQL servers connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'imdb_data',
  port: 8889
});


//=========================================================
// SET UP BFS VARIABLES

//actors to find (inputs)
const firstActorId = 'nm0000102'; //Kevin Bacon
//const targetActorId = 'nm0000102'; //test
const targetActorId = 'nm1297015'; //Emma Stone (III)

//Set initial vars for BFS
let queue = []; // First in, first out (FIFO)
let visitedNodes = [];
let path = [];

const startNode = new Node(firstActorId, 'actor');
const endNode = new Node(targetActorId, 'actor');

//set the first node in our path to be the firstActorId
path.push(startNode);

//populate the queue initially with the firstActorId
queue.push(startNode);

if(startNode.id === endNode.id){
  console.log('END!!!!!!');
}

//=====================================
//Start Database Connection
connection.connect();

//start off by getting all of the movies that the initial actor is in
const initialQueryString = `SELECT movieId FROM movie_actor WHERE actorId = '${startNode.id}'`;

connection.query(initialQueryString, function (error, results, fields) {
  if (error) throw error;
  
  //if no error, find all movies of initial actor
  
  results.forEach((result) => {
    let neighbor = new Node(result.movieId, 'movie');
    startNode.addEdge(neighbor);
    
    visitedNodes.push(startNode);
  })

  console.log(startNode);
  



});

//when everything is complete, end the connection
connection.end();




