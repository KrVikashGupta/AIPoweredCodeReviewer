require('dotenv').config()
const app = require('./src/app')



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})

