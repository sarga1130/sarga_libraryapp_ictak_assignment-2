const express = require('express');
const authorsRouter = express.Router();

var authors=[
 {
    name :'Joseph Barbera',
    genre : 'Cartoon',
    img : "josephbarbera.jpg"
 },
 {
    name : 'J K Rowling',
    genre : 'Fantacy',
    img : "jkrowling.jpg"
 },
 {
    name : 'Vaikom Muhammed Basheer',
    genre : 'Drama',
    img : "Vbasheer.jpg"
 },
 {
    name : 'Arundhati Roy',
    genre : 'Drama',
    img : "arundhati.jpg"
 },
 {
    name : 'Aravind Adiga',
    genre : 'Mystery',
    img : "aravind.jpg"
 },
 {
    name : 'Vikram Seth',
    genre : 'Fiction',
    img : "vikram.jpg"
 },
 {
    name : 'Amitav Ghosh',
    genre : 'Political Fiction',
    img : "amitav.jpg"
 },
 {
    name : 'John H. Timmerman',
    genre : 'Fantacy',
    img : "timmer.jpg"
 },
 {
    name : 'Stephen King',
    genre : 'Horror Fiction',
    img : "stephenking.jpg"
 },
 {
    name : 'Neal Stephenson',
    genre : 'Science Fiction',
    img : "neal.jpg"
 },
 {
    name: 'A.P.J Abdul Kalam',
    genre : 'Biography',
    img : "APJ.jpg"
 }
 
]
// {link:"/authors",name:"Authors"},
authorsRouter.get('/',function(req,res){
 res.render("authors",
 {
 nav:[{link:"/books",name:"Books"},{link:"/addauthor",name:"Add Authors"}],
 title:'Library',
 authors
 });

});

authorsRouter.get('/:id',function(req,res){
 const id=req.params.id
 res.render('author',{
 nav:[{link:"/authors",name:"Authors"},{link:"/books",name:"Books"}],
 title:'Library',
 author:authors[id]
 });
});
module.exports = authorsRouter;