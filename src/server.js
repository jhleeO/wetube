import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("Good to see you!");
}

const handleLogin = (req, res) => {
  return res.send("Login here!");
}
app.get("/", handleHome);
app.get("/login", handleLogin);

const handlerListen = () => console.log("✅ Server listening on port http://localhost:${PORT} ☄️")

app.listen(PORT, handlerListen);
