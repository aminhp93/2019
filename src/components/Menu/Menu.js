import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="row" onClick={() => this.props.callbackMenu("dashboard")}>Dashboard</div>
        <div className="row">Thi truong</div>
        <div className="rowItems">
          <div className="rowItem" onClick={() => this.props.callbackMenu("overview")}>Tong quan</div>
          <div className="rowItem">HSX</div>
          <div className="rowItem">HNX</div>
          <div className="rowItem">UPCOM</div>
        </div>
        <div className="row">Watchlist</div>
        <div className="row">Canh bao</div>
        <div className="row">Bang gia</div>
        <div className="row">Phan tich</div>
        <div className="row">Tin tuc</div>
        <div className="row">Co phieu</div>
      </div>
    );
  }
}

export default Menu;
