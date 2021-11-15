const PORT = process.env.PORT || 3000;
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const urlsRouter = require("./back/routers/urlRouter");
const { urlHandler } = require("./back/middleware/urlHandler");
const { errorHandler } = require("./back/middleware/errorHandler");

// add cors app
app.use(cors({
  origin: "*"
}));

app.use(express.json())
app.use("/", express.static(`./front/dist`));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/front/dist/index.html");
});

// error url
app.use(urlHandler)

app.use("/api" , urlsRouter)

// error hadler
app.use(errorHandler)

// Listening on port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});