const config = require('./env');
const express = require('express');
const app = express();
const apiai = require('apiai')(config.apiaiToken);

app.use(express.static(__dirname + '/views')); // html
app.use(express.static(__dirname + '/public')); // js, css, images

const server = app.listen(5000);
app.get('/', (req, res) => {
	res.sendFile('index.html');
});
