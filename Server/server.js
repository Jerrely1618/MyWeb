require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const { fetchProjectsByType } = require("../Client/db");

app.use(morgan("combined"));
app.use(helmet());
const corsOptions = {
  origin: [
    "https://my-web-ruddy-nine.vercel.app",
    "https://my-web-ruddy-nine.vercel.app",
  ],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/api/projects/:type", async (req, res) => {
  const { type } = req.params;
  try {
    const projects = await fetchProjectsByType(type);
    console.log(projects);
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: error.message });
  }
});

app.use(express.static("build"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
