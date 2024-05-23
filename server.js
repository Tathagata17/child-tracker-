const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const accountSid = 'ACed16fff52ae1c9e109abe14d9190509c';
const authToken = '00ecd122a2d72137f6aaf791a6b4da33';
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
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+917477759422'
    }).then((msg)=>{console.log(msg.sid+hostname)})
    .catch((err)=>{console.log(err)})
});

app.listen(3000,()=>
{
    console.log("server running");
})
