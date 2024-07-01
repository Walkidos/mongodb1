const express=require('express')
const connectdb=require('./config/connectdb')
const app=express()

connectdb()

app.listen(4000,(err)=>err?console.log(err):console.log('server is running'))
