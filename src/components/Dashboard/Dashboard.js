import React from "react";
import axios from "axios";
import { getWatchlistsUrl, getLatestNewUrl, getCorsAnywhereUrl } from "../../helpers/requests";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latestNewsObj: {},
      showTablePrice: false
    }
  }
  render() {
    return (
      <div className="dashboard">
        {
          this.state.showTablePrice
            ? <div onClick={() => this.setState({ showTablePrice: false })} className='tablePrice'>Dong</div>
            : null
        }
        <div className='mainDashboard'>
          <div className="row borderDashBottom">
            <div className='flex'>
              <div>Phan mem</div>
              <div>Web Platform Free</div>
            </div>
            <div className='flex'>
              <div>Phien ban phan mem</div>
              <div>Nang cap</div>
            </div>
          </div>
          <div className="row borderDashBottom">
            <div>Thoi han</div>
            <div>Thoi gian het han</div>
          </div>
          <div className="row borderSolidBottom">
            <div>{this.state.latestNewsObj.Title || ''}</div>
          </div>
          <div className="row borderSolidBottom">
            <div>Watchlist</div>
            <div>Cap nhat nhanh co phieu yeu thich</div>
          </div>
          <div className="row">
            <div className='flex'>
              <div className='button' onClick={() => this.handleShowTablePrice()}>
                <div>Bang gia</div>
                <div>Bang gia dien tu</div>
              </div>
              <div className='button'>
                <div>Watchlist</div>
                <div>Co phieu quan tam</div>
              </div>
            </div>
            <div className='flex'>
              <div className='button'>
                <div>Phan tich ky thuat</div>
                <div>Bieu do phan tich ky thuat</div>
              </div>
              <div className='button'>
                <div>Canh bao</div>
                <div>Canh bao tin hieu</div>
              </div>
            </div>
          </div>
        </div>
        <div className='market'>
          <div className="row">
            <div>THI TRUONG</div>
            <div>Chart</div>
          </div>
        </div>
        <div className='watchlist'>
          <div className="row">
            <div>Watchlist</div>
            <div>Watchlist</div>
          </div>
        </div>
        <div className='warning'>
          <div className="row">
            <div>Canh bao</div>
            <div>Canh bao</div>
          </div>
        </div>
      </div>
    );
  }

  handleShowTablePrice() {
    this.setState({
      showTablePrice: true
    })
  }

  componentDidMount() {
    let url = getCorsAnywhereUrl() + getLatestNewUrl()
    axios
      .get(url)
      .then(response => {
        if (response.data) {
          this.setState({
            latestNewsObj: response.data
          })
        }
      })
      .catch(error => {
        console.log(error);
      });

    // url = getCorsAnywhereUrl() + getWatchlistsUrl()
    // axios
    //   .get(url)
    //   .then(response => {
    //     console.log(response)
    //     if (response.data) {
    //       this.setState({
    //         watchlistsObj: response.data
    //       })
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    url = getCorsAnywhereUrl() + 'https://svr1.fireant.vn/api/Data/Companies/CompanyInfo?symbol=FPT'
    axios
      .get(url)
      .then(response => {
        console.log(response)
        if (response.data) {
          this.setState({
            watchlistsObj: response.data
          })
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default Dashboard;
