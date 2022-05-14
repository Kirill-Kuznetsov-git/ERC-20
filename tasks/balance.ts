import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import {get_contract as get_contract} from "./init";

task("balance", "Get balance of of Token")
    .addParam("address", "Address of user who balance you want to know")
    .setAction(async(taskArgs, hre) => {
        const ERCTokenContract = await get_contract(hre)
        const address = taskArgs.address;
        console.log("Balance of", address, ":", (await ERCTokenContract.balanceOf(address)).toString())
    })