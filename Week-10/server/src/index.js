import express from "express";
import "./db/init.js"

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`Application server is running at port: ${PORT}`);
});
