import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import {get_contract as get_contract} from "./init";

task("transferfrom", "Transfer tokens to spender from sender")
    .addParam("sender", "Sender of tokens")
    .addParam("spender", "Receiver of tokens")
    .addParam("value", "Number of tokens to transfer")
    .setAction(async(taskArgs, hre) => {
        const sender = taskArgs.sender;
        const spender = taskArgs.spender;
        const value = taskArgs.value;
        const ERCTokenContract = await get_contract(hre)
        await ERCTokenContract.transferFrom(sender, spender, value)
        ERCTokenContract.on("Transfer(address,address,uint256)", (from, to, value) => {
            console.log(`
            Transfer:
            from: ${from}, 
            to: ${to}, 
            value: ${value}
            `)
        })
    })