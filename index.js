const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

const videos = [
  "sUm3mvZii6Y",
  "DvwMVIJb0Jk",
  "Zu073TPW3E8",
  "mvMJl_0oQ_8",
  "MMF9T_9DAcs",
];

app.get("/api/react-node", (req, res) => {
  res.send(videos);
});

if (process.env.NODE_ENV != "development") {
  app.use(express.static(path.join(__dirname, "front/build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "front/build/index.html", function (error) {
        if (error) {
          res.status(500).send(error);
        }
      })
    );
  });
}

app.listen(3000, () => {
  console.log("Running");
});
