const server = require('./app');

const port = 5000.;
server.listen(port, () => console.log(`Server is Running on port: ${port}`))