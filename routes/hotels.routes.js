const router = require('express').Router();
const hotelsController = require('../controllers/hotels.controller');
const seeder = require('../controllers/data-seeder');

router.get('/get',hotelsController.hotelGet);

router.post('/addhotel',hotelsController.Post);

router.delete('/del/all',hotelsController.del);

router.get('/city/:city',hotelsController.city);

router.get('/get/:id',hotelsController.getById);

router.get('/name/:name',hotelsController.getByName);

router.post('/seed',seeder.add);

module.exports = router;