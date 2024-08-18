const fsys = require('fs');

fsys.readFile('./content/first.txt','utf8',(err,res) => {
    if(err){
        return;
    } 
    console.log(res);
    const first = res;
    fsys.readFile('./content/second.txt','utf8',(err,res) => {
        if(err){
            return
        }
        console.log(res);
        const second = res;
        fsys.writeFile('./content/result-async.txt',`${first} and ${second} are my async files`,{flag:'a'},(err,res) => {
            if(err){
                return
            }
            console.log(res)
        })
    })
});