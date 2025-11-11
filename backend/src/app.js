// create server
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const foodRoutes = require('./routes/foodRoute')
const cors = require('cors');

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoute);

module.exports = app;