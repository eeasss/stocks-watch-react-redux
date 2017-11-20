const dataProvider = require('./data-provider.js');

module.exports = {
    ticker: function(req, res) {
        let ticker = req.swagger.params.name.value;
        dataProvider.getTickerQuote({ name: ticker })
            .then(data => { res.send(JSON.parse(data)); });
    }
}
