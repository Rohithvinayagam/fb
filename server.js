const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const morgan=require("morgan")
const cors=require("cors")
const {MongoClient}=require("mongodb")
let url ="mongodb+srv://gunalrohith269:gunalrohith269@rohith.bmxhwti.mongodb.net/?retryWrites=true&w=majority"
const client=new MongoClient(url)

app.use(cors())
app.use(bodyParser.json())
app.use(morgan("combined"))

app.post('/register',async(req,res)=>{
  
    let {usermobno,password}=req.body
  if((usermobno!==undefined)&&(password!==undefined)) { 
    let db=await client.connect()
    let dbo=db.db("new")
    let out=await dbo.collection("user").insertOne({name:name,password:password})
    if( out.acknowledged){
        res.json({"success":true})
    }
    else{
        res.json({"success":false})
    }}
    else{
        res.json({"message":"invalid request"})
    }
})



app.listen(3000)