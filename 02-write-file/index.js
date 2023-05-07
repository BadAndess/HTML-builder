const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = process;

const input = fs.createWriteStream(path.join(__dirname, 'text.txt'));
stdout.write('Hello!\nEnter your text!\n');
stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
        process.exit();
    } else {
        input.write(data);
    }
});

process.on('exit', () => stdout.write('Good luck!'))
;

process.on('SIGINT', () => exit(0));