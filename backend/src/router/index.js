
const express = require('express');
const studentApiRouter = require('./Apis/studentApiUrl');

const router = express.Router();


router.use('/api/students', studentApiRouter);

module.exports = router;