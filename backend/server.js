// start server

import app from "./src/app.js";
import connectDB from "./src/db/db.js";

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Radhe Radhe: Server is running on port ${port} ✅ `);
  connectDB();
});
