const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

const { addName, updateName, deleteName } = require("./controllers/controller.js")

app.post("/names", addName)
app.put("/names", updateName)
app.delete("/names", deleteName)


app.listen(4000,console.log("Server running on 4000"))