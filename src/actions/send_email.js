export default SendEmail = (name, email, message, callBack) => {

    const SERVICE_ID = "bscaspar_gmail";
    const TEMPLATE_ID = "template_G6LO5SQg";
    const USER_ID = "user_ckhJga60nVGejK8C2ZFin";
    emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            name: name,
            email: email,
            message: message
        },
        USER_ID
    )
        .then(callBack());
}