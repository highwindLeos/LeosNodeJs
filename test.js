console.log('hellow world');

const nodeMailer = require('nodemailer')
const email = {
    host   : 'smtp.mailtrap.io' ,
    port   : 2525 ,
    auth : {
        'user'     : '' ,
        'password' : ''
    }
}

const send = async (option) => {
    nodeMailer.createTransport(email).sendMail(option, (error, info) => {
        if(error){
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    });
}