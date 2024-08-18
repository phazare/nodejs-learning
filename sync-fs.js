const fileSys = require('fs');

const firstFile = fileSys.readFileSync('./content/first.txt','utf8')
console.log(firstFile)
const secondFile = fileSys.readFileSync('./content/second.txt','utf8')
console.log(secondFile)

fileSys.writeFileSync('./content/result.txt',`   this is the result of ${firstFile} and ${secondFile}`,{flag:'a'})
