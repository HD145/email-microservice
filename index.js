require('dotenv').config();

const express = require("express");
const { handleMailSendService } = require("./mail-service");

const app = express();
app.use(express.json());

app.post("/sendMail", handleMailSendService)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}.`);
})