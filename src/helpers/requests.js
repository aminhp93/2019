import dataStorage from '../dataStorage';
import durationReportEnums from '../constants/durationReportEnums'
import config from '../config';
var moment = require('moment');

const accountNumber = dataStorage.accountNumber;
const currentTime = moment()
const todayDate = moment().format('YYYY-M-DD')

let domain
if (config.environment === 'PRODUCTION') {
    domain = 'https://project-2018-backend.herokuapp.com'
} else {
    domain = 'http://localhost:8000'
}

export function getHeaderRequest() {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'X-Auth-Token': dataStorage.accessToken
        }
    }
}

export function getCompanyInfoUrl(symbol) {
    return 'https://www.fireant.vn/api/Data/Companies/CompanyInfo?symbol=' + symbol
}

export function getLatestFinancialInfoUrl(symbol) {
    return 'https://www.fireant.vn/api/Data/Finance/LastestFinancialInfo?symbol=' + symbol
}

export function getAllIndustryFinancialInfoUrl() {
    // return 'https://www.fireant.vn/api/Data/Finance/AllIndustryFinancialInfo'
    return 'https://project-2018-backend.herokuapp.com/'
}

export function getAlertsUrl() {
    return 'https://www.fireant.vn/api/Data/Alerts/Alerts'
}

export function getIntradayQuotesUrl(symbol) {
    return 'https://svr2.fireant.vn/api/Data/Markets/IntradayQuotes?symbol=' + symbol
    // return 'https://cors-anywhere.herokuapp.com/https://svr2.fireant.vn/api/Data/Markets/IntradayQuotes?symbol=' + symbol
}

export function getMarketHistoricalQuotesUrl(symbol) {
    return 'https://svr1.fireant.vn/api/Data/Markets/HistoricalQuotes?symbol=' + symbol + '&startDate=2017-10-8&endDate=' + todayDate
}

export function getMajorHolderTransactionsRangeUrl(symbol) {
    return 'https://www.fireant.vn/api/Data/Companies/MajorHolderTransactionsRange?symbol=' + symbol + '&startDate=2017-9-25&endDate=2037-1-1'
}

export function getTimescaleMarksUrl(symbol) {
    return 'https://www.fireant.vn/api/Data/Companies/TimescaleMarks?symbol=' + symbol + '&startDate=2017-9-25&endDate=2037-1-1'
}

export function getMajorHoldersUrl(symbol) {
    return 'https://www.fireant.vn/api/Data/Companies/MajorHolders?symbol=' + symbol
}

export function getEquityAndDividendsUrl(symbol) {
    return 'https://www.fireant.vn/api/Data/Companies/EquityAndDividends?symbol=' + symbol + '&count=5'
}

export function getCompanyNewsUrl(symbol) {
    return 'https://www.fireant.vn/api/Data/News/CompanyNews?symbol=' + symbol + '&startIndex=0&count=10'
    // return 'https://cors-anywhere.herokuapp.com/https://www.fireant.vn/api/Data/News/CompanyNews?symbol=' + symbol + '&startIndex=0&count=10'
}

export function getCompanyNewsCountUrl(symbol) {
    return 'https://www.fireant.vn/api/Data/News/CompanyNewsCount?symbol=' + symbol
}

export function getNewContentUrl(newsId) {
    return 'https://svr1.fireant.vn/api/Data/News/NewsContent?id=' + newsId
}

export function getCompanyHistoricalQuotesUrl(symbol) {
    return 'https://www.fireant.vn/api/Data/Companies/HistoricalQuotes?symbol=' + symbol + '&startDate=2017-10-8&endDate=2018-10-3'
    // return 'https://cors-anywhere.herokuapp.com/https://www.fireant.vn/api/Data/Companies/HistoricalQuotes?symbol=' + symbol + '&startDate=2018-8-19&endDate=2018-9-19'
}

export function getYearlyFinancialInfoUrl(symbol) {
    return 'https://www.fireant.vn/api/Data/Finance/YearlyFinancialInfo?symbol=' + symbol + '&fromYear=2015&toYear=2018'
}

export function getQuarterlyFinancialInfoUrl(symbol) {
    return 'https://www.fireant.vn/api/Data/Finance/QuarterlyFinancialInfo?symbol=' + symbol + '&fromYear=2015&fromQuarter=1&toYear=2018&toQuarter=4'
}

export function getHistoricalQuotesBeforeUrl(symbol) {
    return 'https://www.fireant.vn/api/Data/Markets/HistoricalQuotesBefore?symbol=' + symbol + '&days=20'
}

export function getPivotPointsUrl() {
    return 'https://www.fireant.vn/api/Data/Technical/PivotPoints'
}

export function getTechnicalIndicatorsUrl() {
    return 'https://www.fireant.vn/api/Data/Technical/TechnicalIndicators'
}

export function getMovingAveragesUrl() {
    return 'https://www.fireant.vn/api/Data/Technical/MovingAverages'
}

export function getTradingStatisticUrl() {
    // return 'https://cors-anywhere.herokuapp.com/https://svr2.fireant.vn/api/Data/Markets/TradingStatistic'
    return 'https://svr2.fireant.vn/api/Data/Markets/TradingStatistic'
    // return 'https://project-2018-backend.herokuapp.com/trading-statistic'
}

export function getAccountUrl() {
    return 'https://trade-api.vndirect.com.vn/accounts/' + accountNumber
}

export function getAccountAssetsUrl() {
    return 'https://trade-api.vndirect.com.vn/accounts/v2/' + accountNumber + '/assets'
}

export function getAccountLoanUrl() {
    return 'https://trade-api.vndirect.com.vn/accounts/' + accountNumber + '/loan'
}

export function getAccountPortfolioUrl() {
    return 'https://trade-api.vndirect.com.vn/accounts/v3/' + accountNumber + '/portfolio'
}

export function getAccountAftypeUrl() {
    return 'https://trade-api.vndirect.com.vn/accounts/' + accountNumber + '/aftype'
}

export function getAccountStocksUrl() {
    return 'https://trade-api.vndirect.com.vn/accounts/v3/' + accountNumber + '/stocks'
}

export function getAccountCommissionsUrl() {
    return 'https://trade-api.vndirect.com.vn/accounts/' + accountNumber + '/commissions'
}

export function getNotificationsUrl() {
    return 'https://notiv2.vndirect.com.vn/notisocket/notifications?page=0&size=500'
}

export function getAccountNewOrderRequestUrl() {
    return 'https://trade-api.vndirect.com.vn/accounts/' + accountNumber + '/orders/new_order_requests?t=' + currentTime
}

export function getDataHistoryUrl(symbol, resolution, fromDate, toDate) {
    return 'https://dchart-api.vndirect.com.vn/dchart/history?symbol=' + symbol + '&resolution=' + resolution + '&from=' + fromDate + '&to=' + toDate
}

export function getSaveLayoutChartUrl() {
    // Save to new layout
    // 'https://chart-api.vndirect.com.vn/1.1/charts?client=vnds_trading_view&user=vnds-0001813109'
    // Save to current layout
    return 'https://chart-api.vndirect.com.vn/1.1/charts?client=vnds_trading_view&user=vnds-0001813109&chart=33095'
}

export function getLoadLayoutChartUrl() {
    // All layout
    // https://chart-api.vndirect.com.vn/1.1/charts?client=vnds_trading_view&user=vnds-0001813109
    // Current layout
    return 'https://chart-api.vndirect.com.vn/1.1/charts?client=vnds_trading_view&user=vnds-0001813109&chart=33095'
}

export function getIntradayMarketStatisticUrl(stockExchange) {
    return 'https://svr2.fireant.vn/api/Data/Markets/IntradayMarketStatistic?symbol=' + stockExchange
}


export function getDailyWatchlistUrl() {
    return 'https://watchlist-api.vndirect.com.vn/api/watchlists/5bc4c50ab93c4e67cff5e867'
}

export function postDailyWatchlistUrl() {
    return 'https://watchlist-api.vndirect.com.vn/api/watchlists/5bc4c50ab93c4e67cff5e867/symbols'
}

export function deleteDailyWatchlistUrl(symbol) {
    return 'https://watchlist-api.vndirect.com.vn/api/watchlists/5bc4c50ab93c4e67cff5e867/symbols/' + symbol
}

export function getLastestFinancialReports(type, symbol, index) {
    return `https://www.fireant.vn/api/Data/Finance/LastestFinancialReports?symbol=${symbol}&type=${type}&year=2018&quarter=${index === durationReportEnums.YEAR ? '0' : '4'}&count=5`
}

export function getLastestFinancialReports_1(symbol, index) {
    return `https://www.fireant.vn/api/Data/Finance/LastestFinancialReports?symbol=${symbol}&type=1&year=2018&quarter=${index === durationReportEnums.YEAR ? '0' : '4'}&count=5`
}

export function getLastestFinancialReports_2(symbol, index) {
    return `https://www.fireant.vn/api/Data/Finance/LastestFinancialReports?symbol=${symbol}&type=2&year=2018&quarter=${index === durationReportEnums.YEAR ? '0' : '4'}&count=5`
}

export function getLastestFinancialReports_3(symbol, index) {
    return `https://www.fireant.vn/api/Data/Finance/LastestFinancialReports?symbol=${symbol}&type=3&year=2018&quarter=${index === durationReportEnums.YEAR ? '0' : '4'}&count=5`
}

export function getLastestFinancialReports_4(symbol, index) {
    return `https://www.fireant.vn/api/Data/Finance/LastestFinancialReports?symbol=${symbol}&type=4&year=2018&quarter=${index === durationReportEnums.YEAR ? '0' : '4'}&count=5`
}

export function getAllNotesUrl() {
    return 'https://project-2018-backend.herokuapp.com' + '/notes/all'
}

export function getInsertNoteUrl() {
    return 'https://project-2018-backend.herokuapp.com' + '/note/insert'
}

export function getUpdateNoteUrl() {
    return 'https://project-2018-backend.herokuapp.com' + '/note/update'
}

export function getTradingViewScanUrl() {
    return 'https://scanner.tradingview.com/vietnam/scan'
}

export function getTradingViewNewsUrl() {
    return 'https://news-headlines.tradingview.com/headlines/yahoo/category/stocks/?locale=vi_VN'
}