import { expect } from "chai";
import { ethers } from "hardhat";

describe("ERC-20", function () {
  let owner
  let firstCandidate
  let secondCandidate
  let firstParticipant
  let secondParticipant

  beforeEach(async function () {
    [owner, firstParticipant, secondParticipant, firstCandidate, secondCandidate] = await ethers.getSigners()

    const ERCEngine = await ethers.getContractFactory("ERC-20", owner)
    const ERCContract = await ERCEngine.deploy()
    await ERCContract.deployed()
  })
});
