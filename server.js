import express from "express";

const APP_PORT = 4000;

const server = express();

server.listen(APP_PORT, () => {
  console.log(`Server running on port: ${APP_PORT}`);
});

const router = express.Router();

// Routes

router.get("/", (_, res) => {
  const GITHUB_TOKEN = "ghp_zJQU8MTSHYKTmlRPLVoEbGkdyB4afY4Dzzzz"; 
  console.log(GITHUB_TOKEN);
  res.json({
    message: "This is root endpoint",
    data: GITHUB_TOKEN
  });
});

server.use(router);
