const fs = require('fs');

fs.createReadStream("./index.html").pipe(fs.createWriteStream("./dist/index.html"));
