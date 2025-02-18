const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (data) => {
    const email = { ...data, from: 'denis_vr@meta.ua' }

    await sgMail.send(email);

    return true;
}

module.exports = sendEmail;