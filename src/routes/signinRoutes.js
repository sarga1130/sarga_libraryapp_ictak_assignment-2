const express = require('express');
const signinRouter=express.Router();


signinRouter.get('/',function(req,res){
    res.render("signin",{
 
        nav:[{link:"/signup",name:"SignUp"}],
        title:'Library',
    });

});

module.exports=signinRouter;