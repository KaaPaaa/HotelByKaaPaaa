const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
  const responseData =  { test: "hi"};
  res.json(responseData);
});


module.exports = router;