import request from "supertest";
import { app } from "../../app";

it("returns a 200 on index route", async () => {
  return request(app).get("/").expect(200);
});

it("returns an object of fallback messages", async () => {
  const response = await request(app).get("/api/whoami").expect(200);
  expect(response.body).toEqual({
    ipaddress: "no ip available",
    language: "no language available",
    software: "no software available",
  });
});
