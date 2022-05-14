import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import {get_contract as get_contract} from "./init";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});
task("name", "Get name of Token")
    .setAction(async(taskArgs, hre) => {
        const ERCTokenContract = await get_contract(hre)
        console.log("Name of Token:", await ERCTokenContract.name())
    })

task("symbol", "Get symbol of Token")
    .setAction(async(taskArgs, hre) => {
        const ERCTokenContract = await get_contract(hre)
        console.log("Symbol of Token:", await ERCTokenContract.symbol())
    })

task("decimals", "Get decimals of Token")
    .setAction(async(taskArgs, hre) => {
        const ERCTokenContract = await get_contract(hre)
        console.log("Decimals of Token:", await ERCTokenContract.decimals())
    })

task("totalSupply", "Get totalSupply of Token")
    .setAction(async(taskArgs, hre) => {
        const ERCTokenContract = await get_contract(hre)
        console.log("TotalSupply of Token:", await ERCTokenContract.totalSupply())
    })

task("balance", "Get balance of of Token")
    .addParam("address", "Address of user who balance you want to know")
    .setAction(async(taskArgs, hre) => {
        const ERCTokenContract = await get_contract(hre)
        const address = taskArgs.address;
        console.log("Balance of", address, ":", (await ERCTokenContract.balanceOf(address)).toString())
    })