const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Register=require("./registerschema.js")
const port=3700

app.use(bodyParser.urlencoded({
	extended:true

}))

app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb+srv://reddy0408:reddy202368@cluster0.r2engdn.mongodb.net/1stdb?retryWrites=true&w=majority")
 	.then(()=>{
 		console.log("connection established")
 	})
 	.catch((err)=>{
 		console.log(errn)
 	})
 app.get("/",(req,res)=>{
 	res.send("be good do good")
 })

app.post("/register",(req,res)=>{
	//const{email,passcode}=req.body;
	const email="user@gmail.com",passcode="1234"
	const newFrontUser= new Register({
		username:email,
		password:passcode
	})
	newFrontUser.save()
})


app.listen(port,()=>console.log("life is short be happy",port))
