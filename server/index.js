const express = require('express')
const app = express()
const authRouter = require("./routes/auth")
const PORT = 3000
app.use(express.json())
app.use(authRouter)
app.listen(PORT, () => {
    console.log(`port connected at ${PORT}`)
})