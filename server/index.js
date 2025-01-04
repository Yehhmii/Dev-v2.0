const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle resume requests
app.post('/request-resume', async (req, res) => {
    const { email } = req.body;

    // Validate request body
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    // Configuring nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // Email options
    const mailOptions = {
        from: email, 
        to: process.env.EMAIL, 
        subject: 'Resume Request',
        text: `You have a new resume request from: ${email}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Request sent successfully' });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Failed to send request' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});


