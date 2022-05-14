import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import {get_contract as get_contract} from "./init";

task("mint", "Add tokens from total number of tokens")
    .addParam("account", "Account to which add tokens")
    .addParam("amount", "Number of tokens to add")
    .setAction(async(taskArgs, hre) => {
        const account = taskArgs.spender;
        const amount = taskArgs.value;
        const ERCTokenContract = await get_contract(hre)
        console.log(await ERCTokenContract.mint(account, amount))
    })