const express = require("express");
const HealthController = require("./src/controllers/HealthController");
const MapController = require('./src/controllers/MapController')


const router = express.Router();

// Controllers
const healthController = new HealthController();
const mapController = new MapController();

// Routes
router.get("/:query", mapController.renderMaps, async(req, res) => {
  res.render('index')
});

router.get("/info", healthController.info); 
router.get("/ping", healthController.ping); 

//router.get("*", pageController.renderNotFound);

module.exports = router;
