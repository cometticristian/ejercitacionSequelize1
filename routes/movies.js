var express = require('express');
const moviesController = require('../controllers/moviesController');
var router = express.Router();

router.get('/', moviesController.list);

router.get('/detail/:id', moviesController.detail);

router.get('/new', moviesController.news);

router.get('/recommended', moviesController.recommended);

router.post('/search', moviesController.search);

module.exports = router;


