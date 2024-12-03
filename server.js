const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');


console.log('', )

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Здесь будут маршруты

const PORT = process.env.PORT ||  3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

