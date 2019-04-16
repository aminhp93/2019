import React from 'react';
import dataStorage from '../../dataStorage';

class Self extends React.Component {
    constructor(props) {
        super(props)
        console.log(props, dataStorage)
    }
    render() {
        return <div>PHAM NGOC MINH - Amin
            <div onClick={() => dataStorage.test = 1234}>click</div>
        </div>
    }
}

export default Self