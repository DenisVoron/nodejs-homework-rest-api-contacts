const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (data) => {
    const email = { ...data, from: 'denis_vr@meta.ua' }

    sgMail.send(email)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
    return true;
}

module.exports = sendEmail;