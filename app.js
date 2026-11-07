// Import the express module
import express from 'express';

// Create an instance of an express app
const app = express();

// Define a port number for the server to listen on
const PORT = 3006;

// Set EJS as the active view engine
app.set('view engine', 'ejs');

// Enable static file serving
app.use(express.static('public'));

// Define a default route
app.get('/', (req, res) => {

    const person = { name: 'Donald Duck', occupation: 'plumber', favoriteColor: 'blue' };
    res.render('home', { person });

});

app.get('/friends', (req, res) => {

    const friends = [ 'Mickey', 'Goofy', 'Minnie', 'Daisy' ];

    res.render('friends', { friends });

});

// Start the server on the designated port
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));