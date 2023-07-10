// AVEC EXPRESS (ARCHITECTURE MVC) ET MONGO DB-------------------------------------------------------

require('dotenv').config();
const { connectDb } =require('./src/services/mongoose')
const userRoutes = require('./src/routes/user')
const mediaRoutes = require('./src/routes/media')
const projectRoutes = require('./src/routes/project')
const express = require('express');
const app= express();
const port = process.env.PORT || 3000;

connectDb().catch(err => console.log(err));

app.use(express.json());
app.use(userRoutes);
app.use(mediaRoutes);
app.use(projectRoutes);


app.listen(port, () => {
    console.log(`Le serveur est lancé à : http://localhost ${port}`);
})


