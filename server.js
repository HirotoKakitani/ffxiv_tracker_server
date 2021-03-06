const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
app.use(cors());
app.use(express.json());
app.use(require('./routes/routes.js'))

app.listen(port, () => {
    console.log('Server is running on port', port);
});