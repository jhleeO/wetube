import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
}

const privateMiddlewware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not allowed</h1>");
  }
  
  next();
}

const handleHome = (req, res) => {
  return res.send("Good to see you!");
}

const handleLogin = (req, res) => {
  return res.send("Login here!");
}

const handleProtected = (req, res) => {
  return res.send("Welcome to the private handle.");
}

app.use(logger);
app.use(privateMiddlewware);
app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected)

const handlerListen = () => console.log(`✅ Server listening on port http://localhost:${PORT}☄️`)

app.listen(PORT, handlerListen);
