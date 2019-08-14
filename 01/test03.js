let sd = require("silly-datetime");
let http = require("http");
let fs = require("fs");

let app = http.createServer(function(request, response){

    
    
    let pathname = request.url;

    if (pathname == "/")
    {
        pathname = "index.html";
    }

    if (pathname != "/favicon.ico"){
        console.log(pathname);

        fs.readFile("./static/"+pathname, function(err, data){
            if (err){
                console.log(err);
            }
            else{
                response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
                response.write(data);
                response.end();
            }
        });
    }

});

app.listen(8002);