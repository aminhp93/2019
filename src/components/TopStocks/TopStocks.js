import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import axios from "axios";

class TopStocks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.columnDefs = [
      {
        headerName: "MA CK",
        field: "Symbol"
      },
      {
        headerName: "GIA",
        field: "Close",
        cellRenderer: function(params) {
          return (params.data.Close / 1000).toFixed(2);
        }
      },
      {
        headerName: "THAY DOI",
        field: "Change",
        cellRenderer: function(params) {
          return (params.data.Change / 1000).toFixed(2);
        }
      },
      {
        headerName: "%",
        field: "PercentChange",
        cellRenderer: function(params) {
          return (params.data.PercentChange * 100).toFixed(2) + "%";
        }
      },
      {
        headerName: "KHOI LUONG",
        field: "Volume"
      }
    ];

    this.defaultColDef = {
      width: 120,
      editable: false,
      filter: "agTextColumnFilter"
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "500px",
          width: "600px"
        }}
      >
        <AgGridReact
          columnDefs={this.columnDefs}
          defaultColDef={this.defaultColDef}
          onGridReady={this.onGridReady.bind(this)}
          enableSorting={true}
          //   onRowClicked={this.onRowClicked.bind(this)}
          enableFilter={true}
        />
      </div>
    );
  }

  getData(data) {
    let promise = null;
    let listPromise = [];
    for (let i = 0; i < data.length; i++) {
      promise = new Promise(resolve => {
        const url =
          "https://svr3.fireant.vn/api/Data/Markets/HistoricalQuotes?symbol=" +
          data[i].Symbol +
          "&startDate=2019-4-10&endDate=2019-5-10";
        axios
          .get(url)
          .then(response => {
            console.log(response.data);
            let resolvedData = {};
            resolvedData.Symbol = data[i].Symbol;
            resolvedData.Close = response.data[response.data.length - 1].Close;
            resolvedData.Change =
              response.data[response.data.length - 1].Close -
              response.data[response.data.length - 2].Close;
            resolvedData.PercentChange =
              resolvedData.Change / resolvedData.Close;
            resolvedData.Volume =
              response.data[response.data.length - 1].Volume;
            console.log(resolvedData);
            resolve(resolvedData);
          })
          .catch(error => {
            console.log(error);
            resolve([]);
          });
      });
      listPromise.push(promise);
    }
    Promise.all(listPromise)
      .then(response => {
        console.log(response);
        this.gridApi.setRowData(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    let url = "https://svr3.fireant.vn/api/Data/Markets/TradingStatistic";
    axios
      .get(url)
      .then(response => {
        // console.log(response);
        if (response.data) {
          let data = response.data;
          //   data.splice(10);
          let filter_data = data.filter(
            item => item.Symbol === "ROS" || item.Symbol === "PVD"
          );
          this.getData(filter_data);
        }
      })
      .catch(error => {
        console.log(error);
      });

    // url = "https://svr3.fireant.vn/api/Data/News/MarketNews?count=20";
    // axios
    //   .get(url)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
}

export default TopStocks;
