import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import {get_contract as get_contract} from "./init";

task("name", "Get name of Token")
    .setAction(async(taskArgs, hre) => {
        const ERCTokenContract = await get_contract(hre)
        console.log("Name of Token:", await ERCTokenContract.name())
    })

