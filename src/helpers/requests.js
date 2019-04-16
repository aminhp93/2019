import dataStorage from "../dataStorage";
import durationReportEnums from "../constants/durationReportEnums";
import config from "../config";
var moment = require("moment");

const accountNumber = dataStorage.accountNumber;
const currentTime = moment();
const todayDate = moment().format("YYYY-M-DD");

let domain;
if (config.environment === "PRODUCTION") {
  domain = "https://project-2018-backend.herokuapp.com";
} else {
  domain = "http://localhost:8000";
}

export function getHeaderRequest() {
  return {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      "X-Auth-Token": dataStorage.accessToken
    }
  };
}

export function getCompanyInfoUrl(symbol) {
  return (
    "https://www.fireant.vn/api/Data/Companies/CompanyInfo?symbol=" + symbol
  );
}

export function getWatchlistsUrl() {
  return "https://svr1.fireant.vn/api/Data/Watchlists/Watchlists";
}
