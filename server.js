const path = require("path");
const fs = require("fs");
const express = require("express");
const cloudinary = require("cloudinary");
const app = require("./backend/app");
const connectDatabase = require("./backend/config/database");
const PORT = process.env.PORT || 4000;

// UncaughtException Error
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  process.exit(1);
});

connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// deployment
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "/frontend/build");
  if (fs.existsSync(buildPath)) {
    app.use(express.static(buildPath));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
  } else {
    app.get("/", (req, res) => {
      res.send("Backend API is running! 🚀");
    });
  }
} else {
  app.get("/", (req, res) => {
    res.send("Server is Running! 🚀");
  });
}

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
