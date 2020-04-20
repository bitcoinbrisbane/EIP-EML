import React from "react";

const TotalSupply = ({ contract }) => {

    state = {
        totalSupply: []
    };

    //erc20
    const request = {
        "jsonrpc":"2.0",
        "method":"eth_call",
        "params":[{"to": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52", 
        "data":"0x70a0823100000000000000000000000045996DB58Ff69dad0b2Aea85530d06f5991f91A1"}, "latest"],
        "id":1
    }

    axios.post(`http://192.168.1.105:8545`, request )
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({ totalSupply: res.data.result })
        })

    return (
        <label>{this.state.totalSupply}</label>
    )
}
