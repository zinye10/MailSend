const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { to, subject, html } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'octoberprince.1995@gmail.com',
      pass: 'iqpx qpyt hewf hmyd'
    }
  });

  let mailOptions = {
    from: 'Booking System <octoberprince.1995@gmail.com>',
    to: 'octoberboy.1995@gmail.com',
    subject: subject,
    html: html
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({error: error.toString()});
    }
    return res.status(200).json({message: 'Email sent: ' + info.response});
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
