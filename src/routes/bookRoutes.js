const express = require('express');
const booksRouter = express.Router();
var books = [
    {
        title: 'Tom and Jerry',
        author: 'Joseph Barbera',
        genre: 'Cartoon',
        img: "tom.jpg"
    },
    {
        title: 'Harry Potter',
        author: 'J K Rowling',
        genre: 'Fantacy',
        img: "harry.jpg"
    },
    {
        title: 'Paathumayude Aadu',
        author: 'Basheer',
        genre: 'Drama',
        img: "basheer.jpg"
    },
    {
        title: 'The God of Small Things',
        author: 'Arundhati Roy',
        genre: 'Drama',
        img: "thegod.jpeg"
    },
    {
        title: 'The White Tiger',
        author: 'Aravind Adiga',
        genre: 'Mystery',
        img: "The-White-Tiger.jpg"
    },
    {
        title: 'A Suitable Boy',
        author: 'Vikram Seth',
        genre: 'Fiction',
        img: "suitableboy.jpg"
    },
    {
        title: 'Shadow Lines',
        author: 'Amitav Ghosh',
        genre: 'Political Fiction',
        img: "shadow.jpg"
    },
    {
        title: 'Other Worlds',
        author: 'John H. Timmerman',
        genre: 'Fantacy',
        img: "otherworlds.jpg"
    },
    {
        title: 'The Hunger',
        author: 'Stephen King',
        genre: 'Horror Fiction',
        img: "hunger.jpg"
    },
    {
        title: 'Snow Crash',
        author: 'Neal Stephenson',
        genre: 'Science Fiction',
        img: "snowcrash.jpg"
    },
    {
        title: 'Wings of Fire',
        author: 'A.P.J Abdul Kalam',
        genre: 'Biography',
        img: "wingsoffire.jpg"
    },
    
          
]
// {link:"/books",name:"Books"},

booksRouter.get('/',function(req,res){
 res.render("books",
 {
 nav:[{link:"/authors",name:"Authors"},{link:"/addbooks",name:"Add Books"}],
 title:'Library',
 books
 });

});

booksRouter.get('/:id',function(req,res){
 const id=req.params.id
 res.render('book',{
 nav:[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"}],
 title:'Library',
 book : books[id]
 })
})
module.exports = booksRouter;