const express = require('express')

const app = express()
const PORT = 4000

app.get('/', (req, res) => { res.send('<h1> express-app is running and ok...</h1>') });
app.listen(PORT, () => { console.log(`app is up and running at http://localhost:${PORT}`); });