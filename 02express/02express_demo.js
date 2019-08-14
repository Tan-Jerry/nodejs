let express = require("express");

let app = express();

app.use(express.static("public")); // express为public目录下的文件提供静态web服务

app.listen(1234);

app.get("/login", (req, res) => {
    res.send("Hello, express");
});