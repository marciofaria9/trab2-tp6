const express = require('express')
const router = require('./router/customer.route')

const app = express()
app.use(express.json())
app.use('/api/v1/worldcup', router)

const port = 8087
app.listen(port, () => console.log(`Server up on port ${port}`))