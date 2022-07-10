import { Router } from "express"

const numbers = Router()

numbers.get("/", (req, res) => {
    res.json({message: "Nothing here"})
})

numbers.get("/:number", (req, res) => {
    const numberString = req.params.number as string
    const number = parseInt(numberString)
    if(!isNaN(number)){
        res.json({message: number + 1})
        res.status(200)
    }else{
        res.json({message: "Not a number!"})
        res.status(400)
    }
})

export default numbers
