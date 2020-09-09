### Myanmar Cities Townships V1

Support Js and Ts .

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ npm install @nmh/myanmar-cities-townships --save
```

### Ts Example!

---

import { getCities, getTownshipsByCityId, getTownshipByCityName } from "..";

console.log(getCities());
console.log(getTownshipsByCityId(56));
console.log(getTownshipByCityName("Ayarwaddy"));

### Js Example!

---

const {
getCities,
getTownshipsByCityId,
getTownshipByCityName,
} = require("../build");

console.log(getCities());
console.log(getTownshipsByCityId(56));
console.log(getTownshipByCityName("Ayarwaddy"));

---
