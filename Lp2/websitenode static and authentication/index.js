const express=require('express')

const app=express();
app.listen(3000,()=>{
    console.log('server running on port 3000')
});

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile('./public/index.html',{root:__dirname});
})

app.get('/about',(req,res)=>{
    res.sendFile('./public/about.html',{root:__dirname});
})