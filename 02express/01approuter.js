let url=require("url");


let G = {_get:{}, _post:{}};

let app = function(request, response){
    console.log(request.url);
    let pathname = url.parse(request.url).pathname;
    console.log(pathname);

    console.log(request);

    let method = request.method.toLowerCase();

    if (method == "get"){
        if (G["_get"][pathname])
        {
            G["_get"][pathname](request, response);
        }
    }
    else if (method == "post"){
        let postStr = "";
        request.on('data', function(chunk){
            postStr += chunk;
        })

        request.on("end", function(err, chunk){
            request.body = postStr;
            G["_post"][pathname](requset, response);
        });
    }
};

app.get =function(urlpath, callback){
    G["_get"][urlpath] = callback;
};

app.post =function(urlpath, callback){
    G["_post"][urlpath] = callback;
};

exports.app = app;