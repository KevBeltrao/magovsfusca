const app = require('./config/server');

const homeRoute = require('./app/routes/home');
homeRoute(app);

app.listen(process.env.PORT || 3000);