const fs = require('fs');
const path = require('path');
const { stdout, stdin} = process;
const secretFolder = path.join(__dirname, 'secret-folder');

fs.readdir(secretFolder,  (err, files) => {
    if(err) throw err;
    
    console.log(`Info about objects in folder ${secretFolder}:`);

    files.forEach(file => {
        fs.stat(secretFolder, {withFileTypes: true}, (err, stats) => {
            if(err) {
                console.log('File error');
                return;
            } else 
    console.log(`Name ${file} ${stats.size} byte`);
        })
    })
});

    