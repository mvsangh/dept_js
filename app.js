require('dotenv').config();
const express =  require('express')
const app= express();

app.get("/testing",(req,res)=>{
	res.json({
		status:true,
		message:"This is the rest api testing and it is successfull"
	})
});


app.listen(process.env.APP_PORT,()=>{
	console.log("Server is up and running at 3000")
})