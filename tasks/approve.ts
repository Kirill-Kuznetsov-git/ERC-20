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
        ERCTokenContract.on("Approval(address,address,uint256)", (owner, spender, value) => {
            console.log(`
            Approval:
            Owner: ${owner}, 
            Spender: ${spender}, 
            value: ${value}
            `)
        })
        await ERCTokenContract.approve(spender, value)
    })

