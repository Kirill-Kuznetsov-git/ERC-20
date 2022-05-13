import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.getContractFactory("ERC20");
  const contractDeployed = await contract.deploy();

  await contractDeployed.deployed();

  console.log("Contract deployed to:", contractDeployed.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
