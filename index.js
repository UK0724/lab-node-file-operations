const data=require('./data');
const os=require('os');
const fs=require('fs');
const crypto = require('crypto');

const getos=os.userInfo();

fs.writeFileSync('message.txt','message.txt')
const userdatas=data("Prograd",2021,"B.E");
console.log(userdatas)
const password = crypto.createHmac('sha256','a secret').update('Prograd').digest('hex');
fs.appendFileSync('message.txt',`\nPrograd Details   
    UserName ->${userdatas.name} 
    Year ->${userdatas.Year}
    Qualification ->${userdatas.Qualification}
    Username ->${getos.username}
    Password ->${password}`)