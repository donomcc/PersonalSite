require("dotenv").config();
const myEmail = process.env.EMAIL;
const myPassword = process.env.PASSWORD;
const serverPort = process.env.PORT;
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/send-email", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "recipient-email@gmail.com",
    subject: req.body.subject,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Something went wrong.");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent!");
    }
  });
});

app.listen(serverPort, () => {
  console.log(`Server listening on port ${serverPort}`);
});
