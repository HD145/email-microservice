const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

const handleMailSendService = async(req, res) => {
    try {
        const { mailId, title, mailBody } = req.body;
        console.log(mailId, title, mailBody);
        
        const res = await resend.emails.send({
            from: 'workwithus@mailer.com',
            to: mailId,
            subject: title,
            html: mailBody
        });

        console.log("res", res);
        
        return res.status(200).send({ message: "Mail Sent Successfully" });
    } catch (error) {
        return res.status(404).send({ message: `Error in mail - ${error}` });
    }
}

module.exports = {
    handleMailSendService
}