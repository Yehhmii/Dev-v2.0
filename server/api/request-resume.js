const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'https://dev-v2-1.vercel.app'); 
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        // Handle preflight request
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: 'Resume Request',
            text: `You have a new resume request from: ${email}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Request sent successfully' });
        } catch (error) {
            console.error('Error sending message:', error);
            return res.status(500).json({ error: 'Failed to send request' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
};
