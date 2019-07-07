const app = require('express')();
const port = 3000;
const db = require('./config/database');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:4200'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: '+err));

app.set('json spaces', 4);

const index = require('./routes/index');
const albuns = require('./routes/albuns');
const login = require('./routes/login');

app.use('/', index);
app.use('/albuns', albuns);
app.use('/login', login);

app.listen(port, () => console.log('Up on port '+port));