//const { json } = require("body-parser");
//const { application } = require("express");
//const name=window.location.hostname;
//console.log("lol");
//console.log(name);
//if(name=="leetcode.com")
//    {
//        console.log("yes");
//        fetch('http://localhost:3000/post',{
//            method:'POST',
//            headers:{
//                'Content-Type': 'application/json'
//            },
//            body: JSON.stringify({ hostname: window.location.hostname })
//        })
//        .then(response => response.json())
//        .then(data => {console.log("Message sent: ", data);})
//        .catch(err => {console.error("Error sending message: ", err);});
//    }

document.addEventListener("visibilitychange",()=>
{
    if(document.visibilityState=="visible")
        {
            console.log("gotchu");
            fetch('http://localhost:3000/post',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({hostname:window.location.hostname})
            })
            .then((resp)=>{resp.json})
            .then((data)=>{console.log("sent:",data)})
            .catch((err)=>{console.log(err)})
        }
})
