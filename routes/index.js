var express = require("express");
var router = express.Router();
const file =
  "D0E76AD0C1DEA1375D7C907E8A126324DA04A5AEC971F9667452BD7841ED6707 comodoca.com 602ffde7bc0f9";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get(
  "/.well-known/pki-validation/78CA01BE52E60612478B45A9C40995AF.txt",
  function (req, res, next) {
    res.send(file);
  }
);

module.exports = router;
