// SPDX-FileCopyrightText: 2019 John Irle
//
// SPDX-License-Identifier: MIT

import { app } from "./app";
const PORT = 5000;

// listen for requests :)
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
