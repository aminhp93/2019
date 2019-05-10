import React from "react";
import axios from "axios";
import TopStocks from "../TopStocks/TopStocks";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marketNewsObj: {}
    };
  }
  render() {
    return (
      <div className="overview">
        <div className="mainOverview">
          <div className="vn-idx">
            <div>VN-IDX</div>
            <div />
          </div>
          <div className="hn-idx">HN-IDX</div>
          <div className="up-idx">UP-IDX</div>
        </div>
        <div className="statistic">
          <div>Thong ke</div>
          <TopStocks />
        </div>
        <div className="marketMovement">
          <div>Bien dong nganh</div>
        </div>
        <div className="news">
          <div>Tin tuc</div>
        </div>
      </div>
    );
  }

  componentDidMount() {}
}

export default Overview;
