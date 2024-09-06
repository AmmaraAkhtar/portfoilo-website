const express=require("express");
const app=express();
const path=require("path");


let port =3000;
let data=[
{
    firstName:"Ammara",
    email:"ammaraakhtar@gmail.com",
    phoneNo:"03038761832"
}
]
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));


app.get("/home",(req,res)=>{
     res.render("home.ejs");
});

app.post("/form",(req,res)=>{
 let {firstName,email,phoneNo}=req.body;
  data.push({firstName,email,phoneNo});
  console.log(data);
});
app.listen(port,()=>{
    console.log(`app listening at ${port}`);
    });