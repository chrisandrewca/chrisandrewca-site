const express = require('express');
const got = require('got');
const router = express.Router();

router.get('/:id', async (req, res, next) => {
  console.log({ key: process.env.CUSTOM_CAT_API_KEY });
  const { body } = await got('https://customcat-beta.mylocker.net/api/v1/product', {
    allowGetBody: true,
    body: JSON.stringify({
      api_key: process.env.CUSTOM_CAT_API_KEY // fix env
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  console.log({ body });
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
    cc: JSON.parse(body) // TODO use fetch?
  });
});

module.exports = router;