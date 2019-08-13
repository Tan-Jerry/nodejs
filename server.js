let express = require("express");

let app = express();

app.use(express.static("public"))

app.listen(3000);

app.post("/url", function(req, res){
    res.send("Hello, express");
})