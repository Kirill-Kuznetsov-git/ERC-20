import "@nomiclabs/hardhat-waffle";
import {HardhatRuntimeEnvironment} from "hardhat/types";

const CONTRACT_ADDRESS_ROPSTEN = "0x3397644AE9EB0e7F24E06eCc82f0311B92D42296";
const CONTRACT_ADDRESS_LOCALHOST = "0x5FbDB2315678afecb367f032d93F642f64180aa3";


export async function get_contract(hre: HardhatRuntimeEnvironment) {
    const accounts = await hre.ethers.getSigners();
    const signer = accounts[0];
    const nftFactory = await hre.ethers.getContractFactory("ERC20", signer);
    return new hre.ethers.Contract(
        CONTRACT_ADDRESS_LOCALHOST,
        nftFactory.interface,
        signer
    )
}