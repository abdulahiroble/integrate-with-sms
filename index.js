import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';

import multer from 'multer';
var upload = multer();

// const corsOptions = {
//     origin: ['http://localhost:3000'],
// };

const app = express();

app.use(cors());

app.use(upload.array());
app.use(router)

app.post('/form', (req, res) => {
    const formData = req.body;
    // Process the form data
    console.log(formData)
    res.send('Form data received');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});