import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import {get_contract as get_contract} from "./init";

task("totalSupply", "Get totalSupply of Token")
    .setAction(async(taskArgs, hre) => {
        const ERCTokenContract = await get_contract(hre)
        console.log("TotalSupply of Token:", await ERCTokenContract.totalSupply())
    })