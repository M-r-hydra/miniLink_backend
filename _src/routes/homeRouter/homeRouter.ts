// Express
import express from "express";
// Express

export const homeRouter = express.Router();

homeRouter.get("/home", async (req, res) => {
  try {
  } catch (err) {}
  res.status(200).json({
    message: "server Is Normal",
  });
});

module.exports = homeRouter;
