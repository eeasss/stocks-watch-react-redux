import DataProvider from './data-provider.mjs';

module.exports = {
    ticker: function(req, res) {
        let ticker = req.swagger.params.name.value;
        dataProvider.getTickerQuote({ name: ticker });
    }
}