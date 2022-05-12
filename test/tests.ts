import { expect } from "chai";
import { ethers } from "hardhat";
import { Greeter__factory } from "../typechain";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const signers = await ethers.getSigners();
    const contract = await new Greeter__factory(signers[0]).deploy();
    await contract.deployed();

    expect(await contract.greet()).to.equal("Hello, world!");

    const setGreetingTx = await contract.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await contract.greet()).to.equal("Hola, mundo!");
  });
});
