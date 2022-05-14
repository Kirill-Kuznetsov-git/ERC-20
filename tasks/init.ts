import "@nomiclabs/hardhat-waffle";
import {HardhatRuntimeEnvironment} from "hardhat/types";

const CONTRACT_ADDRESS_ROPSTEN = `${process.env.CONTACT_ADDRESS_ROPSTEN}`;
const CONTRACT_ADDRESS_LOCALHOST = `${process.env.CONTRACT_ADDRESS_LOCALHOST}`;


export async function get_contract(hre: HardhatRuntimeEnvironment) {
    const accounts = await hre.ethers.getSigners();
    const signer = accounts[0];
    const ERCFactory = await hre.ethers.getContractFactory("ERC20", signer);
    return new hre.ethers.Contract(
        CONTRACT_ADDRESS_ROPSTEN,
        ERCFactory.interface,
        signer
    )
}