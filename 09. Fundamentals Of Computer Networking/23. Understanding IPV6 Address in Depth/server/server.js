
import express, { json } from 'express'

const app = express()


app.get('/', (req,res)=>{
    res.status(200).json({
        message : "hello iam from express server"
    })
})


app.listen(4000, '::', () => {
  console.log('Listening on [::]:4000');
})