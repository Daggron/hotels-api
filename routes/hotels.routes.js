const router = require('express').Router();
const hotelsController = require('../controllers/hotels.controller');

router.get('/',hotelsController.hotelGet);
router.get('/bro',hotelsController.cityGet);

module.exports = router;