import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import {get_contract as get_contract} from "./init";

task("burn", "Remove tokens from total number of tokens")
    .addParam("account", "Account from which delete tokens")
    .addParam("amount", "Number of tokens to delete")
    .setAction(async(taskArgs, hre) => {
        const account = taskArgs.account;
        const amount = taskArgs.amount;
        const ERCTokenContract = await get_contract(hre)
        console.log(await ERCTokenContract.burn(account, amount))
    })
