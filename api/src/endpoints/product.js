var express = require('express');
var router = express.Router();

router.get('/:id', function (req, res, next) {
  return res.json({
    product: {
      title: 'You are good Tee',
      photos: ['chrisandrewca'],
      gender: ['Womens', 'Mens'],
      styles: {
        'Womens': ['Beefy', 'Sporty'],
        'Mens': ['Beefy', 'Sporty']
      },
      colors: {
        'Womens': ['Red', 'Blue', 'Yellow'],
        'Mens': ['Red', 'Blue', 'Yellow']
      }
    }
  });
});

module.exports = router;