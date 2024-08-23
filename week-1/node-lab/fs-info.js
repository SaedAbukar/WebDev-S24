const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('The Error', err)
    } else {
        console.log('The content of the file:', data)
    }
});

fs.writeFile('output.txt', 'The output of the text', (err, result) => {
    if (err) {
        console.log('The file wasnt created', err)
    } else {
        console.log('The file was created', result)
    }
});