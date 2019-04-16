import React from "react";
import axios from "axios";
import { getWatchlistsUrl } from "../../helpers/requests";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <div className="row">
          <div>Phan mem</div>
        </div>
        <div className="row">
          <div>Thoi han</div>
        </div>
        <div className="row">
          <div>Phan mem Fireant metakit phien ban hoan toan moi</div>
        </div>
        <div className="row">
          <div>Watchlist</div>
        </div>
        <div className="row">
          <div>
            <div>Bang gia</div>
            <div>Watchlist</div>
          </div>
          div>
          <div>Phan tich ky thuat</div>
          <div>Canh bao</div>
        </div>
        <div className="row">
          <div>Thi truong</div>
          <div>Chart</div>
        </div>
        <div className="row">
          <div>Watchlist</div>
          <div>Watchlist</div>
        </div>
        <div className="row">
          <div>Canh bao</div>
          <div>Canh bao</div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const url = getWatchlistsUrl();
    axios
      .get(url, {
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default Dashboard;
