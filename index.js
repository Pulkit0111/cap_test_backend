const express = require("express")
const {connectDB} = require("./dbConfig")
const {noteRouter} = require("./routes/note.routes")
const {userRouter} = require("./routes/user.routes")
const cors = require("cors")

const app = express()
app.use(
    cors({
      origin: 'http://localhost:5173', // Replace with the actual origin of your frontend
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
      credentials: true, // If you need cookies or authentication
    })
  )

app.use(express.json())

app.use("/users", userRouter)
app.use("/notes", noteRouter)

app.listen(8080, () => {
    connectDB()
    console.log("Server is running at http://localhost:8080")
})