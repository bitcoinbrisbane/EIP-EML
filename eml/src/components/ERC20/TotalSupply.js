import React, { useState } from "react";
import axios from "axios";

const TotalSupply = ({ contract }) => {

    const [value, setValue] = useState({ totalSupply : [] });
    
    //hash of totalSupply()
    //18160ddd7f15c72528c2f94fd8dfe3c8d5aa26e2c50c7d81f4bc7bee8d4b7932
    
    //Ropsten Storj Test
    //https://ropsten.etherscan.io/token/0x1174c73ec76ff3988b9c54786cc8df7895072a1d
    //erc20
    const request = {
        "jsonrpc":"2.0",
        "method":"eth_call",
        "params":[{"to": "0x1174c73ec76ff3988b9c54786cc8df7895072a1d", 
        "data":"0x18160ddd0000000000000000000000000000000000000000000000000000000000000000"}, "latest"],
        "id":1
    }

    //ROPSTEN http://192.168.1.127:8545

    axios.post(`http://192.168.1.127:8545`, request )
        .then(res => {
            console.log(res);
            console.log(res.data);
            setValue({ totalSupply: res.data.result })
        })

    return (
        <label>{value.totalSupply}</label>
    )
}

export default TotalSupply;