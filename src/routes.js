import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ status: `Server are running at ${req.headers.host}` });
});

export default routes;
