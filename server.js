import express from "express"

const app =express()

app.use(express.urlencoded({ extended: true }));

const PORT=3000

app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.post("/",(req,res)=>{
    res.redirect("/")
})

app.listen(PORT,(req,res)=>{
    console.log(`Listening on ${PORT}`)
})