const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.resolve(__dirname.replace(/node_modules.*/, ''), '.testcaferc.json'), '{}');
