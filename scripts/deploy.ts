import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.getContractFactory("ERC20");
  const accounts = await ethers.getSigners()
  const signer = accounts[0];
  const contractDeployed = await contract.deploy("TestToken", "TT", 1000, await signer.getAddress());

  await contractDeployed.deployed();

  console.log("Contract deployed to:", contractDeployed.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
