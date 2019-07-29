
const express = require('express')
const router = express.Router();
const { Log } = require('../models/log')

const saltRounds = 10;


router.get("/",  async (req, res) => {
  let logs = await Log.find();
  res.send(logs)

})

module.exports = router;
