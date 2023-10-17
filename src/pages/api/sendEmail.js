
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { recipientEmail, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
  secure: true,
  auth: {
    
    user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
    pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
  },
  });

  let mailOptions = {
    from: 'your-email@gmail.com', // Sender address
    to: recipientEmail, // List of recipients
    subject: subject, // Subject line
    text: text, // Plain text body
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error occurred while sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
