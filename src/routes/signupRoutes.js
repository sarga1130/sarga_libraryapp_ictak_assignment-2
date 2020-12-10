const express = require('express');
const signupRouter=express.Router();


signupRouter.get('/',function(req,res){
    res.render("signup",{
 
        nav:[{link:"/signin",name:"Sign In"}],
        title:'Library',
    });

});

module.exports=signupRouter;