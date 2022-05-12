import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.getContractFactory("Greeter");
  const contractDeployed = await contract.deploy();

  await contractDeployed.deployed();

  console.log("Contract deployed to:", contractDeployed.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
