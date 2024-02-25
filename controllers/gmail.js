const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config();

async function mailSender(data){
    const transporter = nodemailer.createTransport({
        service:"gmail",
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        }
    });
    const html = `<p>Name: ${data.name}</p> <p>Email: ${data.email}</p><p>Message: ${data.message}</p>`
    const info = await transporter.sendMail({
        from: "Prabin Sharma <sharmaprabin2233@gmail.com>",
        to: "prabinsharma120@gmail.com",
        subject: "Portfolio Form Submission",
        html: html
    })
    // console.log("Message sent",info);
    return info;
}

module.exports = mailSender;