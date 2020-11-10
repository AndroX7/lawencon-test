if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const PORT = process.env.PORT || 3000;
const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes/index.js')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(routes)

app.listen(PORT, () => {
  console.log(`app running at http://localhost:${PORT}`);
})
