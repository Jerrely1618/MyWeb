require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const { fetchImagesByID, fetchProjectsByType } = require("./db");

app.use(morgan("combined"));
app.use(helmet());
app.use(cors());
app.use(express.static("build"));

app.get("/api/images", async (req, res) => {
  try {
    const images = await fetchImagesByID();
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/projects/:type", async (req, res) => {
  console.log("called1");
  const { type } = req.params;
  try {
    const projects = await fetchProjectsByType(type);
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: error.message });
  }
});
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
