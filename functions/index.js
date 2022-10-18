const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/api/echo', (req, res) => {
  res.status(200).json({
    message: req.query.message,
  });
});

exports.api = functions.https.onRequest(app);
