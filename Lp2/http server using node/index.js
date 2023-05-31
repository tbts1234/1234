const http=require('http')

const app=http.createServer((req,res)=>{
    console.log(req.headers);
    res.end('<h1>Hello world!</h1>');
});



app.listen(3000,()=>{
    console.log('server is listening on port 3000.')
})