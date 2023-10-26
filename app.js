const express = require("express");
const cors = require("cors");
const blogRoutes = require("./posts/router");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.use("/api/blog", blogRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
