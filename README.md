<h1>PukeChat</h1>
<h2>This is a chat system that powered by Express 3.</h2>

<p>Important changes include: 
var app = express();
var server = require('http').createServer(app).listen(3000);
var io = require('socket.io').listen(server);

\#remove app.listen(3000)</p>


#The template is taken from:
"Using Node.js and Websockets to Build a Chat Service" by Guillaume Besson.
