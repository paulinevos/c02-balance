const express = require("express");
const app = express();

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});

app.get("/", (req, res) => {
  return res.json({"message": "OK"});
});
