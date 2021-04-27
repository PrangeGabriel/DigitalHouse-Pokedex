const express = require("express");
const { route } = require("./legendaries");
const router = express.Router();
const bcrypt = require("bcryptjs");

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

  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.session.dados.senha, salt);

  let dadosSalvos = [
    {
      email: req.session.dados.email,
      senha: hash,
    },
  ];

  console.log(dadosSalvos);
});
// router.get('/legendaries')

module.exports = router;
