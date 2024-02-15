const express = require('express')
const app = express()
const PORT = 3500

app.get("/api/v1", (request, response) => {
    response.status(200).json({"msg": "its working"})
})

app.listen(PORT, console.log(`Server is listening on http://localhost:${PORT}/api/v1`))
