import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import {get_contract as get_contract} from "./init";


task("transfer", "Transfer tokens to spender")
    .addParam("spender", "Receiver of tokens")
    .addParam("value", "Number of tokens to transfer")
    .setAction(async(taskArgs, hre) => {
        const spender = taskArgs.spender;
        const value = taskArgs.value;
        const ERCTokenContract = await get_contract(hre)
        await ERCTokenContract.transfer(spender, value)
        ERCTokenContract.on("Transfer(address,address,uint256)", (from, to, value) => {
            console.log(`
            Transfer:
            from: ${from}, 
            to: ${to}, 
            value: ${value}
            `)
        })
    })
