import mysql from 'mysql'
import express from "express"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"

const app = express()

app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)


export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blog"
})

app.listen(8800, () => {
	console.log("Connected!")
})
