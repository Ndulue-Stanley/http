import fs from "fs"

//writeable stream


setInterval(()=>{
    const file = fs.createWriteStream("./streamFile.txt")
    for (let i = 0; i < 1000 ; i++) {
       file.write(`\nWelcome to set08 class ${i}`);
    }
    file;
}, 2000)














