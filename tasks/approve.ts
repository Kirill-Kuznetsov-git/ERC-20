import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import {get_contract as get_contract} from "./init";

task("approve", "Approve tokens to spender")
    .addParam("spender", "Receiver of tokens")
    .addParam("value", "Number of tokens to approve")
    .setAction(async(taskArgs, hre) => {
        const spender = taskArgs.spender;
        const value = taskArgs.value;
        const ERCTokenContract = await get_contract(hre)
        await ERCTokenContract.approve(spender, value)
        ERCTokenContract.on("Approval(address,address,uint256)", (owner, spender, value) => {
            console.log(`
            Transfer:
            Owner: ${owner}, 
            Spender: ${spender}, 
            value: ${value}
            `)
        })
    })

