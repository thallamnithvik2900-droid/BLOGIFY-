const express = require("express");
const cors = require("cors");

const mainRouter = require("./routes");
const errorHandler = require("./middleware/error.middleware");

const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());

// Master Router (Versioned API)
app.use("/api/v1", mainRouter);

// Central Error Handler
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});