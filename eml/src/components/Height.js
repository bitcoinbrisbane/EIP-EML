import React from "react";
import axios from "axios";

export default class Height extends React.Component {

    state = {
        height: []
    };
    
    componentDidMount() {

        const request = {
            "jsonrpc":"2.0",
            "method":"eth_blockNumber",
            "params":[],
            "id":1
        };

        axios.post(`http://192.168.1.105:8545`, request )
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({ height: res.data.result })
            })
    }
    
    render() {
        return(
            <h1>{this.state.height}</h1>
        )
    }
}