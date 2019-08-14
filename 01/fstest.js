let fs=require("fs");

fs.stat("upload", function(err, stat){
    if (err){

        fs.mkdir("upload", function(error){
            if (error){
                console.log(error);
                return false;
            }
            console.log("create dir success");
        });
        console.log(err);

        return false;
    }
    else{
        console.log("Dir upload is already exists");
        console.log(stat.isDirectory());
    }
});


fs.readdir("node_modules", function(err, files){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(files);

        for (let i =0; i< files.length; i++)
        {
            fs.stat
        }
    }

});