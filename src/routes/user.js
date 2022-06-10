const express = require('express');
const router = require('express').Router();

const Homepage = require("../controllers/user")

router.get('/', Homepage)

module.exports = router;
