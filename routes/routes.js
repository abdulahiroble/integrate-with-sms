import express from 'express';
import axios from "axios"

const router = express.Router();

router.post('/sign-up', async (req, res) => {
    const formData = req.body;

    console.log(formData)

    try {
        const response = await axios.post(
            'https://fiotext.com/sign-up',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
                }
            }
        );

        res.json(response.data)
    } catch (error) {
        console.error('Error sending message:', error.response.data);
        res.status(500).json({ error: 'Failed to register' });
    }

});

router.post('/login', async (req, res) => {
    const formData = req.body;

    console.log(formData)

    try {
        const response = await axios.post(
            'https://fiotext.com/login',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
                }
            }
        );

        console.log(response.data)
        res.json(response.data)
    } catch (error) {
        console.error('Error sending message:', error.response.data);
        res.status(500).json({ error: 'Failed to register' });
    }

});

router.post('/sms', async (req, res) => {
    const formData = req.body;

    console.log(formData)

    try {
        const response = await axios.post(
            'https://fiotext.com/send-sms',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
                }
            }
        );

        console.log(response.data)
        res.json(response.data)
    } catch (error) {
        console.error('Error sending message:', error.response.data);
        res.status(500).json({ error: 'Failed to register' });
    }

});




export default router;