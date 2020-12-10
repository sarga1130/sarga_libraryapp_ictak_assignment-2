const express = require('express');
const addauthorRouter = express.Router();
addauthorRouter.get('/',function(req,res){
    res.render("addauthor",{
 
        nav:[{link:"/authors",name:"Authors"}],
        title:'Library',
    });

});

module.exports=addauthorRouter;