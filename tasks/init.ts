import "@nomiclabs/hardhat-waffle";
import {HardhatRuntimeEnvironment} from "hardhat/types";


export async function get_contract(hre: HardhatRuntimeEnvironment) {
    let CONTRACT_ADDRESS: string
    if (`${process.env.NETWORK}` == 'LOCALHOST'){
        CONTRACT_ADDRESS = `${process.env.CONTRACT_ADDRESS_LOCALHOST}`;
    } else {
        CONTRACT_ADDRESS = `${process.env.CONTRACT_ADDRESS_ROPSTEN}`;
    }
    const accounts = await hre.ethers.getSigners();
    const signer = accounts[0];
    const ERCFactory = await hre.ethers.getContractFactory("ERC20", signer);
    return new hre.ethers.Contract(
        CONTRACT_ADDRESS,
        ERCFactory.interface,
        signer
    )
}