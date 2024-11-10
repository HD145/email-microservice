const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

const handleMailSendService = async(req, res) => {
    try {
        const { mailId, title, mailBody } = req.body;        
        const res = await resend.emails.send({
            from: process.env.SEND_MAIL_DOMAIN,
            to: mailId,
            subject: title,
            html: mailBody
        });
        return res.status(200).send({ message: "Mail Sent Successfully" });
    } catch (error) {
        return res.status(404).send({ message: `Error in mail - ${error}` });
    }
}

module.exports = {
    handleMailSendService
}