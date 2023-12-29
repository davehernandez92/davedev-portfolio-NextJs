
import nodemailer from 'nodemailer';


export default async function handler(req, res) {
  const { recipientEmail, customer, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
  secure: true,
  auth: {
    
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, 
  },
  });

  const mailOptions = {
    from: {
        name: 'davedev',
        address: process.env.USER
    }, 
    to: 'davedev.ca@gmail.com', 
    subject: 'new email from Davedev.ca', // Subject line
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
