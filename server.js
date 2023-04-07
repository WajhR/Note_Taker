require('dotenv').config();

const express = require ('express');
// const api_routes = require('./routes/api_routes.js');
const html_routes = require('./routes/html_routes.js');
const api_routes = require('./routes/api_routes.js');

// it gets declared as constance when you declare it as all CAPS.
const PORT = process.env.PORT || 3000;
// console.log(PORT);
// console.log(process.env.API_KEY);

const app = express();
// on the server side we can secure values. create .env file 
// you can access env file through built in 
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'));

app.use('/api', api_routes);
app.use('/', html_routes);

app.listen(PORT, () => console.log ('Listening on port%s', PORT));
