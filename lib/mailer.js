import nodemailer from 'nodemailer';

/** Node mailer. */
export const Mailer = async ({ sender, receiver, subject, text }) => {
    /** Define nodemailer transporter. */
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        // host: process.env.MAIL_HOST,
        // port: process.env.MAIL_PORT,
        auth: {
            user: process.env.GMAIL_APP_ADDR,
            pass: process.env.GMAIL_APP_PASS,
        },
    });

    /** Send the mail. */
    let info = await transporter.sendMail({
        from: sender,
        to: receiver,
        subject: subject,
        text: text,
    });

    /** Return something. */
    if (info.messageId) {
        console.log('Message sent successfully.');
    } else {
        console.log('Unable to send the message.');
    }
};
