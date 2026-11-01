const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to PlayNova!</h1><p>Your website is running.</p>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`PlayNova running on port ${PORT}`);
});
