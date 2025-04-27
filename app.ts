// SPDX-FileCopyrightText: 2019 John Irle
//
// SPDX-License-Identifier: MIT

import express from "express";
import routes from "./routes/index";

const app = express();

app.use("/", routes);

export { app };
