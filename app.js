const express = require("express");

const app = express();

app.use(express.urlencoded({extended: false}));

app.get("/currenttime", (req, res) => {
  res.send("<h1>" + new Date().toISOString() + "<h1>");
});

app.get("/", (req, res) => {
  res.send(
    "<form action='/store-user' method='POST'> <label> Your Name </label><input type='text' name='username'><button>submit</button></form>"
  );
});

app.post("/store-user", (req, res) => {
  const username = req.body.username;
  console.log(username);
  res.send("<h1>Username stored!</h1>");
});

app.listen(3000);
