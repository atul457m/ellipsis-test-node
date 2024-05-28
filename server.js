import express from "express";

const APP_PORT = 4000;

const server = express();

server.listen(APP_PORT, () => {
  console.log(`Server running on port: ${APP_PORT}`);
});

const router = express.Router();

// Routes

router.get("/", (_, res) => {
  res.json({
    message: "This is root endpoint",
  });
});

server.use(router);
