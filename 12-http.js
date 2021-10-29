const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('welcome to our home page')
}
if(req.url === '/about' ){
    res.end('Here is our short history')
}
res.end(`
<h1> 0ops!</h1>
<p> we cant seem to find the page you r looking for</p>
<a href="/">go back home</a>
`)
})

server.listen(5000)