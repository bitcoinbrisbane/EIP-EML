import React from "react";
import Name from "./ERC20/Name";

const ERC20 = ({ contract }) => {

    //erc20

    return (
        <form>
            <Name></Name>
        </form>
    )
}

{
	"jsonrpc":"2.0",
	"method":"eth_call",
	"params":[{"to": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52", 
	"data":"0x70a0823100000000000000000000000045996DB58Ff69dad0b2Aea85530d06f5991f91A1"}, "latest"],
	"id":1
}