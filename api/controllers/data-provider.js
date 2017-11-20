const request = require('request');
const querystring = require('querystring');
const fs = require('fs');

class DataProvider {
    getTickerQuote(options) {
        console.log(options);
        const dataProviderUrl = 'https://www.alphavantage.co/query?';
        let params = {
            function: 'TIME_SERIES_DAILY',
            symbol: options.name,
            outputsize: 'compact',
            apikey: JSON.parse(fs.readFileSync('apikey.json')).apikey
        };

        let promise = new Promise(resolove => {
            let querystringArgs = querystring.stringify(params);
            let url = [dataProviderUrl , querystringArgs].join('');

            request({ method: 'GET', uri: url }, (err, response, body) => {
                    let parsedData = JSON.parse(body);
                    let today = (new Date()).toLocaleDateString();
                    resolove({ price: parsedData['Time Series (Daily)'][today]['4. close'] });
                });
        });

        return promise;
    }

    getTickerQuoteTimeSeries() {

    }
}

module.exports = new DataProvider();