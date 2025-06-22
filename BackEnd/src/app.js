const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

app.use(cors({
  origin: 'https://aipoweredcodereviewer-frontend.onrender.com',
  credentials: true  // Optional, only if you're using cookies or auth headers
}))



app.use(express.json())


app.get('/', (req, res) => {
    res.send('AI Code Reviewer Backend is running 🚀');
});


app.use('/ai', aiRoutes)

module.exports = app