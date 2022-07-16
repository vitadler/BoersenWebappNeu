const express = require('express');
const cors = require('cors');
var yahooFinance = require('yahoo-finance');

const app = express();
const port = 3000;

app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send("OK");
})

app.get('/api/getstockdata', async (req, res) => {
  yahooFinance.historical({
    symbol: 'AAPL',
    from: '2012-01-01',
    to: '2012-12-31',
  }, function (err, quotes) {
    res.status(200).send(quotes)
    console.log(err, quotes);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})