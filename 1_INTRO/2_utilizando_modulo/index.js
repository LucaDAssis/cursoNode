const fs = require('fs') // file system


fs.readFile('aquivo.txt', 'utf-8', (err, data) => {

    if(err){
        console.log(err)
    }

    console.log(data)


});