import express from "express";
const router = express.Router();
import path from "path";

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/favicon.ico", (req, res) => {
  res.status(204);
});

router.get("/api/whoami", (req, res) => {
  const ip = req.get("x-forwarded-for");
  const ipParse = ip?.split(",");
  const language = req.get("accept-language");
  const languageParse = language?.split(",");
  const software = req.get("user-agent");
  const softwareParse = software?.split(/[()]+/);

  res.send({
    ipaddress: ipParse ? ipParse[0] : "no ip available",
    language: languageParse ? languageParse[0] : "no language available",
    software: softwareParse ? softwareParse[1] : "no software available",
  });
});

export default router;
