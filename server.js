import express from "express";

const APP_PORT = 4000;

const server = express();

server.listen(APP_PORT, () => {
  console.log(`Server running on port: ${APP_PORT}`);
});

const router = express.Router();

// Routes

router.get("/", (_, res) => {
  const GOOGLE_CLIENT_ID = "450173309136-0mk24q4kfs5tfogirh8upf1npopu3556.apps.googleusercontent.com"; 
  console.log(GOOGLE_CLIENT_ID);
  res.json({
    message: "This is root endpoint",
    data: GOOGLE_CLIENT_ID
  });
});

server.use(router);
