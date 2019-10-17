import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ ok: true });
  console.log("oi");
});

export default routes;
