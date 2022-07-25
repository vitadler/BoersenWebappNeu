const express = require('express');
const cors = require('cors');
var yahooFinance = require('yahoo-finance');

const app = express();
const port = 3000;

app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send("OK");
})

var SYMBOLS = [
  'AAPL',
  'GOOG',
  'MSFT',
  'IBM',
  'AMZN',
  'ORCL',
  'INTC',
  'QCOM',
  'FB',
  'CSCO',
  'SAP',
  'TSM',
  'BIDU',
  'EMC',
  'HPQ',
  'TXN',
  'ERIC',
  'ASML',
  'CAJ',
  'YHOO'
];

app.get('/api/getstockdata', async (req, res) => {
  yahooFinance.quote({
    symbol: 'AAPL', 
    modules: [ 'price', 'summaryDetail' ]
  }, function (err, quotes) {
    res.status(200).send(quotes)
    console.log(err, quotes);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})