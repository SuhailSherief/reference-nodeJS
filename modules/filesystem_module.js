const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
});

fs.writeFile(path.join(__dirname, '/test', 'newfile.txt'), 'HelloWorld', err =>{
    if(err) throw err;
    console.log("New File created and written");
});

fs.writeFile(path.join(__dirname, '/test', 'newfile.txt'), 'HelloWorld', err => {
    if(err) throw err;
    console.log("New File created and written");
    fs.appendFile(path.join(__dirname, '/test', 'newfile.txt'), 'appended text', err => {
        if(err) throw err;
        console.log("appended");
    })
});

fs.readFile(path.join(__dirname, '/test', 'newfile.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})

fs.rename(path.join(__dirname, '/test', 'newfile.txt'), path.join(__dirname, '/test', 'renamedfile.txt'), err => {
    if(err) throw err;
    console.log('renamed successfully');
});