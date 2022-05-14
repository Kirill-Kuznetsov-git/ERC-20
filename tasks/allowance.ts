import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import {get_contract as get_contract} from "./init";

task("allowance", "How much owner of tokens allow to spender")
    .addParam("owner", "Address of owner of tokens")
    .addParam("spender", "Address of spender of tokes")
    .setAction(async(taskArgs, hre) => {
        const owner = taskArgs.owner;
        const spender = taskArgs.spender;
        const ERCTokenContract = await get_contract(hre)
        console.log("Allowance:", (await ERCTokenContract.allowance(owner, spender)).toString())
    })
