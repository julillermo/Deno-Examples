import express, { Requst, Response } from "express";

const app = express();

app.get("/", (_req: Requst, res: Response) => {
  res.send("Welcome to the Dinosaur API!");
});

app.listen(8000)