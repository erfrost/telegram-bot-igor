const express = require("express");

const router = express.Router({ mergeParams: true });

router.use("/telegram", require("./telegram.router"));

module.exports = router;
