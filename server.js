const express = require("express");
const compression = require("compression");
const path = require("path");
const dotEnv = require("dotenv");
dotEnv.config();
const app = express();
app.use(compression());
app.use(express.static("build"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
