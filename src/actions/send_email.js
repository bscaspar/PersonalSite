import * as emailjs from 'emailjs-com';

const sendEmail = (name, email, message) => {

    const SERVICE_ID = "bscaspar_gmail";
    const TEMPLATE_ID = "template_G6LO5SQg";
    const USER_ID = "user_ckhJga60nVGejK8C2ZFin";

    return new Promise((resolve, reject) => {
        resolve(emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                name: name,
                email: email,
                message: message
            },
            USER_ID
        ));
    });
}

export default sendEmail;