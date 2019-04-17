import React from 'react';
import axios from 'axios'
import { getCorsAnywhereUrl } from './../../helpers/requests'
class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marketNewsObj: {}
        }
    }
    render() {
        return <div className='overview'>
            <div className='mainOverview'>
                <div className='vn-idx'>
                    <div>VN-IDX</div>
                    <div>

                    </div>
                </div>
                <div className='hn-idx'>
                    HN-IDX
                </div>
                <div className='up-idx'>
                    UP-IDX
                </div>
            </div>
            <div className='statistic'>
                <div>Thogn ke</div>
            </div>
            <div className='marketMovement'>
                <div>Bien dong nganh</div>
            </div>
            <div className='news'>
                <div>Tin tuc</div>
            </div>
        </div>
    }

    componentDidMount() {
        let url = getCorsAnywhereUrl() + 'https://svr3.fireant.vn/api/Data/Markets/TradingStatistic'
        axios.get(url).then(response => {
            console.log(response)
            if (response.data) {
                this.tradingStatisticArray = response.data
                // console.log(response.data.filter(item => item.Exchange === 'HOSTC').sort((a, b) => a.))
            }
        }).catch(error => {
            console.log(error)
        })

        url = getCorsAnywhereUrl() + 'https://svr3.fireant.vn/api/Data/News/MarketNews?count=20'
        axios.get(url).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })


    }
}

export default Overview