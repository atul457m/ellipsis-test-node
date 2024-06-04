import express from "express";

const APP_PORT = 4000;

const server = express();

server.listen(APP_PORT, () => {
  console.log(`Server running on port: ${APP_PORT}`);
});

const router = express.Router();

// Routes

router.get("/", (_, res) => {
  if (!process.env.GOOGLE_CLIENT_ID) {
    throw new Error('The GOOGLE_CLIENT_ID environment variable must be set.');
  }
  const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  console.log(GOOGLE_CLIENT_ID);
  res.json({
    message: "This is root endpoint",
    data: GOOGLE_CLIENT_ID,
  });
});

server.use(router);