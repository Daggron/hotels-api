const router = require('express').Router();
const hotelsController = require('../controllers/hotels.controller');

router.get('/get',hotelsController.hotelGet);
router.post('/addhotel',hotelsController.Post);
router.delete('/del',hotelsController.del);
router.get('city/:city',hotelsController.city);

module.exports = router;