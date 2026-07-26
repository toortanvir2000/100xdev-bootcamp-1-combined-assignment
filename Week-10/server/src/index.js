import app from "./app.js";
import connectDB from "./db/init.js";

const PORT = process.env.PORT;

await connectDB();
app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`Application server is running at port: ${PORT}`);
});
