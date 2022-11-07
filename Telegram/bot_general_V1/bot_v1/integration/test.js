

var bot_tok = require('../bot_tok');
var Api = require('./Api');


var param = new Set();

param['function'] = 'TIME_SERIES_DAILY';
param['symbol'] = 'TAEE4.SAO';
param['outputsize'] = 'full';
param['apikey'] = bot_tok.TOKENAPI;

//console.log(param);

Api = new Api('https://www.alphavantage.co/query', param);


Api.showRequestApiGet();


/**
 * 
 */

//Api = new Api('https://financialmodelingprep.com/api/v3/income-statement-as-reported/AAPL', );

 //Api.showRequestApiPost();


