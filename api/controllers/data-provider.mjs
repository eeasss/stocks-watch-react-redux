import https from 'https';

export class DataProvider {
    getTickerQuote(options) {
        const dataProviderUrl = 'https://www.quandl.com/api/v3/datasets/WIKI';
        let params =- [
            'order=asc',
            'column_index=4',
            'collapse=quarterly',
            'transformation=rdiff'
        ];

        return { price: '100' };
    }

    getTickerQuoteTimeSeries() {

    }
}
