let express=require("express")

let app=express()

app.get("/",(req,res)=>{                    //Creating a route here 
    res.send({status:1,msg:"Home Page API"})
})

app.get("/news",(req,res)=>{
    res.send({status:1,msg:"News page API"})
})


app.listen("7000")


