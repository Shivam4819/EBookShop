const express= require('express')
const app= express()
const morgan=require('morgan')

require('dotenv/config')

const api= process.env.API_URL
const mongoose = require('mongoose');
const bookRouter= require('./routers/books')
const categoryRouter= require('./routers/categories')
const orderRouter= require('./routers/orders');
const cors = require('cors');



app.use(cors());
app.options('*', cors())


// middileware
app.use(express.json());
app.use(morgan('tiny'));


// routes
app.use(`${api}/book`, bookRouter)
app.use(`${api}/category`, categoryRouter)
app.use(`${api}/order`, orderRouter)




app.listen(3000,()=>{
    console.log('server running on http://localhost:3000');
    console.log(api)
})

// to connect to mongo atlas
mongoose.connect(process.env.DB_CONNECTION_STRING)
.then(()=>{
    console.log('Db connection is ready....')
})
.catch((err)=>{
    console.log(err)
})

