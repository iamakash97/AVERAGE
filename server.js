var http=require('http');
var fs=require('fs');
var url=require('url');
var query=require('querystring');
var module=require('./module');

http.createServer(function(req,res)
{
    var d=url.parse(req.url);

    switch(d.pathname)
    {
        case "/":
            res.writeHead(200,{'Content-type':'text/html'});
            fs.readFile("student.html",function(error,data)
            {
                if(error)
                {
                    console.log('Error in file');
                }
                else
                {
                    console.log('Show File');
                    res.end(data);
                }
            });
            break;
            case "/percentage":
             res.writeHead(200,{'Content-type':'text/html'});
             data=query.parse(d.query);
             result=module.percentage(data.physics,data.chemistry,data.math);
             res.end("<h1>Hey "+data.name+"Your Percentage is "+result+"</h1>");
    }
}).listen(8081);
console.log(" Node js Server is Running on Port 8081");