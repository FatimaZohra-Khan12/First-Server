// server creation

const http=require("http");
const port= 8081;
const toDoList=["Need to learn","Need to code"];

http.createServer((req,resp)=>
{
    // resp.writeHead(200,{"Content-Type":"text/html"});
    // resp.write("<h3>Hello There! , This is from my new server</h3>");
    // resp.end();

    const{ method,url } = req;
    if(url === "/todos")
    {
        //http://localhost:8081/todos
        if(method === "GET")
        {
            resp.writeHead(200,{"Content-Type":"text/html"});
            resp.write(toDoList.toString());
        }
        else if(method ==="POST")
        {
           let body=" ";
           req.on("error",(err) =>
           {
            console.log(err);
           }).on('data',(chunk) =>
           {
            body+=chunk;
            console.log(chunk);
           }).on('end',() =>
           {
            body=JSON.parse(body);
            console.log("Body Data", body);
           })
        }
        else{
            resp.writeHead(501);
        }

    } 
    else
    {
        resp.writeHead(401);
    }
    
    resp.end();


}).listen(port,()=>
{
    console.log(`My node.js server ${port}`);
})

//http://localhost:8081

