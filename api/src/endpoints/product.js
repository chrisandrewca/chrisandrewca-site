const express = require('express');
const got = require('got');
const router = express.Router();

router.get('/:tag', async (req, res, next) => {

  const { body } = await got('https://customcat-beta.mylocker.net/api/v1/product', {
    allowGetBody: true,
    headers: { 'Content-Type': 'application/json' },
    json: {
      api_key: process.env.CUSTOM_CAT_API_KEY
    },
    responseType: 'json'
  });

  return res.json({
    product: {
      title: 'You are good Tee',
      photos: ['chrisandrewca'],
      genders: ['Womens', 'Mens'],
      styles: {
        'Womens': ['Beefy', 'Sporty'],
        'Mens': ['Beefy', 'Sporty']
      },
      colors: {
        'Womens': ['Red', 'Blue', 'Yellow'],
        'Mens': ['Red', 'Blue', 'Yellow']
      }
    },
    cc: body // TODO use fetch?
  });
});

module.exports = router;