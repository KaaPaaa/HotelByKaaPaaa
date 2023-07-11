const express = require('express');
const cors = require('cors');

const app = express();
const test = require('.//Router/test');

app.use(cors()); 
app.use('/api', test);

const port=5000; 
app.listen(port, ()=> {
  console.log(`Listening on port ${port}`);
});
