var fs = require('fs');
var path = require('path')

var dir = './Logs';

let addFile = function(){

    // Create a Logs dir if not exists
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    // Change the current process to the Logs dir
    try{
        process.chdir(dir);
    }catch(e){
        console.log(e);
    }

    // Text to write to files
    let text = "Hello world!";
    
    // Create 10 log files
    for(let i = 0; i < 10; i++){
        let name = `log${i}.txt`;
        try{
            fs.writeFileSync(name, text);
            console.log(name);
        }catch(err){
            console.log(err);
        }
    }
}

addFile()