const fs = require('fs');
const path = require('path');
const { stdout, stdin} = process;
const secretFolder = path.join(__dirname, 'secret-folder');

fs.readdir(secretFolder,  (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});
    