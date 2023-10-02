const express = require('express');
const router = express.Router();
const gameController = require("../controllers/gameController");

router.get("/", gameController.game_index);
router.post("/", gameController.game_create_post);
router.patch("/:id", gameController.game_update);
router.delete("/:id", gameController.game_delete);

module.exports = router;
