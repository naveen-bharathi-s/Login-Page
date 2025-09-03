// const express = require("express")
// const cors = require("cors")

// let uname = "naveen"
// let upass = 123

// app.get("/login", (req,res) => {
//     console.log(req.query.name)
//      if(req.query.name === uname && Number(req.query.pass) === upass){
//         res.send(true)
//      }else{
//         res.send(false)
//      }
// } )

// app.post("/login", (req,res) => {
//     console.log(req.body.name)
//      if(req.body.name === uname && Number(req.body.pass) === upass){
//         res.send(true)
//      }else{
//         res.send(false)
//      }
// } )

// app.get("/", (req,res) => {
//     res.send("You entered server")
// })

import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Temporary store
let users = []

// Sign-up route
app.post("/signup", (req,res) => {
    const {name, email, pass} = req.body

    // check if user already exists
    const existing =  users.find(u => u.email === email)
    if(existing){
        return res.status(400).json({success: false, message: "User Already Exists"})
    }

    // push new user
    users.push({name, email, pass})
    console.log("users:", users)

    res.json({success: true, message: "Signup Successful"})

})

// Login route
app.post("/",  (req,res) => {
    const {email, pass}= req.body


    const user =  users.find(u => u.email === email && u.pass === pass)
    if(user){
        res.send({success: true, name: user.name})
    }else{
        res.send({success: false})
    }
})

app.listen(3000, () => {
    console.log("server started...")
})