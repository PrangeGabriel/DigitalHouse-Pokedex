var express = require("express");
const { route } = require("./legendaries");
var router = express.Router();
var bcrypt = require("bcryptjs");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(req.cookies);
  res.render("index", { title: "Express", darkMode: req.session.darkMode });
});

router.get("/dark-mode", function (req, res) {
  req.session.darkMode = !req.session.darkMode;

  res.cookie("darkMode", req.session.darkMode, {
    maxAge: 86400,
  });

  res.redirect("/");
});

router.get("/desafio24", function (req, res) {
  req.session.dados = { email: "grupo5", senha: "senha5" };
  let dadosSalvos = [req.session.dados];

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync("senha", salt);
  // req.session.email = "grupo5";
  // req.session.senha = "senha5";
  // console.log(req.session);
  res.json(salt);
  res.json(hash);

  res.json(dadosSalvos);
});
// router.get('/legendaries')

module.exports = router;
