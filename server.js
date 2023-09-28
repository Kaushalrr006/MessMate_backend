const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./Admin/adminRoutes')
const env = require('./.env')

require('dotenv').config()




const app = express()
// app.use(cors())
const PORT = process.env.PORT || 3000

// app.use(express.json())

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.log(err))

//   const adminRoutes = require('./Admin/adminRoutes'); 
//   app.use(adminRoutes);

// app.use(routes)

app.listen(PORT, () => console.log('listening on port 3000'))