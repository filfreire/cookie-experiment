const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.cookie('mycookie1', 'cookie_value', {
    domain: req.hostname,
    httpOnly: true,
    sameSite: 'strict',
    secure: true
  });

  res.send('Hello, World!');
});

const PORT = 5000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
