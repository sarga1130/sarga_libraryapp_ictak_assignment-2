const express = require('express');
const app = new express();

const booksRouter=require('./src/routes/bookRoutes');
const authorsRouter=require('./src/routes/authorRoutes');
const signinRouter=require('./src/routes/signinRoutes');
const signupRouter=require('./src/routes/signupRoutes');
const addbookRouter=require('./src/routes/addbookRoutes');
const addauthorRouter=require('./src/routes/addauthorRoutes');

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);
app.use('/addbooks',addbookRouter);
app.use('/addauthor',addauthorRouter);


app.get('/',function(req,res){
    res.render("index",
    {
    nav:[{link:"/signin",name:"Sign IN"},{link:"/signup",name:"Sign UP"}],   
    title:'Library'
    });
});

app.listen(5000);