const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{
    res.send(JSON.stringify(friends,null,4));
  // Update the code here
//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
    let mail=req.params.email;
    res.send(friends[mail])
  //This line is to be replaced with actual return value
});


// POST request: Add a new friend
router.post("/",(req,res)=>{
    if(req.body.email){
        friends[req.body.email]={
            "firstName":req.body.firstName,
            "lastName":req.body.lastName,
            "DOB":req.body.DOB
        }
    }
  // Update the code here
  res.send("the user "+req.body.firstName+"has been added")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
    let mail=req.params.email;
    let friend=friends[mail];
    let fname=req.body.firstName;
    let lname=req.body.lastName;
    let dob=req.body.DOB;
    if(friend){
    if(dob){
        friend["DOB"]=dob;
    }
    if(fname){
        friend["firstName"]=fname;
    }
    if(lname){
        friend["lastName"]=lname;
    }
    friends[mail]=friend;
    res.send(`${mail} of your list was updated`);
}
    else{
        res.send("unable to fetch your account")
    }
    
    
    //This line is to be replaced with actual return value
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
    let mail=req.params.email;
    if(mail)
    delete friends[mail];
    res.send(`friend with ${mail} was deleted`)
    //This line is to be replaced with actual return value
});

module.exports=router;
