const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
// const PORT = 5000;

const connectDB = require('./Config/db');
connectDB();

//adding db
//is it working ?

//Routes
app.use('/api/files', require('./routes/files'));

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
})