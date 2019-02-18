const fs = require('fs');
const path = require('path');
var dir = './Logs';

let remove = function(){
    fs.readdir (dir, (err, logs) => {
        if (err) console.log('No such directory');
        else{
            for(let log of logs){
                fs.unlinkSync(path.join(dir, log))
                console.log(`delete files...${log}`)
            }
        
            fs.rmdirSync(dir, (err) => {
                if (err) console.log(err);
            })
        }
    })
}

remove();