const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/info', async (req, res, next) => {
  try {
    res.json({
      code: 0,
      data: {
        name: 'xxx',
        trait: 'xxx',
        message: 'xxx',
      },
    });
  } catch(error) {
    next(error)
  }
});

module.exports = router;
