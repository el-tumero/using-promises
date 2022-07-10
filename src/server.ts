import express, { Router } from "express"
import numbers from "./router/numbers"

const app = express()
const port = 3000

app.use("/", numbers)

app.listen(port, () => {
    console.log("Server is running on http://localhost:"+port)
})