const server = require('./api/server.js');

const port = process.env.PORT || 4000

console.log()
server.listen(4000, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
