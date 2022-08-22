// const express = require("express");
import express from "express";
const app = express();
import fetch from "node-fetch";

const port = process.env.PORT || 3785;

app.get("/", (req, res) => {
  res.send("working");
});

app.get("/fab_api", (req, res) => {
  try {
    fetch("https://api.fabdb.net/cards")
      .then((res) => res.json())
      .then((data) => {
        res.send({ data });
      });
    // res.send(`Here on the backend`);
  } catch (e) {
    console.error(e);
  }
});

app.listen(port, () => console.log(`listening on port ${port}`));
