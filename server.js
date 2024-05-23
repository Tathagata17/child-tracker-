const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const accountSid = 'happy';
const authToken = 'happyhappy';
const twilio=  require("twilio")(accountSid,authToken);


const app=express();
app.use(bodyParser.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello");
});
app.post("/post",(req,res)=>
{
    const hostname = req.body.hostname;
    const date=new Date();
    twilio.messages.create({
        body:"user vistited " +hostname +" at time "+date.getHours()+":"+date.getMinutes(),
        from: 'whatsapp:+1',
        to: 'whatsapp:+91'
    }).then((msg)=>{console.log(msg.sid+hostname)})
    .catch((err)=>{console.log(err)})
});

app.listen(3000,()=>
{
    console.log("server running");
})
