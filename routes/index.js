const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

module.exports = router;