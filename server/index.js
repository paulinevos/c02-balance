const express = require("express");
const sqlite3 = require("sqlite3");
const {open} = require("sqlite");
const app = express();

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});

app.get("/", (req, res) => {
  return res.json({"message": "OK"});
});

app.get("/items", (req, res) => {
  if (req.method === 'POST') {
    // TODO: implement inserting an item.
    // insertItem(req.post)
    //   .then(result => res.json({"message": "OK"}))
    //   .error(error => res.json({"error": error.message}));
  }

  fetchItems()
    .then(items => res.json({"items": items}));
});

async function fetchItems() {
  return await getDb()
    .then(db => db.all("SELECT * FROM Items"))
    .then(items => items);
}

async function getDb() {
  return await open({
    "driver": sqlite3.Database,
    "filename": "/Users/paulinevos/co2-saldo.db"
  });
}
