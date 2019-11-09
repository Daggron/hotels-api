const router = require('express').Router();
const hotelsController = require('../controllers/hotels.controller');

router.get('/get',hotelsController.hotelGet);
router.post('/addhotel',hotelsController.Post);
router.delete('/del/all',hotelsController.del);
router.get('/city/:city',hotelsController.city);
router.get('/get/:id',hotelsController.getById);

module.exports = router;