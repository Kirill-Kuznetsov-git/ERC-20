import {expect} from "chai";
import {BigNumber, Signer} from "ethers";
import {ethers} from "hardhat";
import { ERC20,ERC20__factory } from "../typechain-types";

describe("ERC-20", function () {
  let contract: ERC20;
  let accounts: Signer[];

  beforeEach(async function () {
    accounts = await ethers.getSigners()

    const ERCEngine = await new ERC20__factory(accounts[0])
    contract = await ERCEngine.deploy("Test", "TT", 1000, await accounts[0].getAddress())
    await contract.deployed()
  })

  it("deploy start info", async () => {
    expect(await contract.symbol()).to.eq("TT")
    expect(await contract.name()).to.eq("Test")
    expect(await contract.decimals()).to.eq(18)
  })

  it("transfer function", async () => {
    let balanceSender: BigNumber = await contract.balanceOf(await accounts[0].getAddress())
    let balanceReceiver: BigNumber = await contract.balanceOf(await accounts[1].getAddress())
    await contract.transfer(await accounts[1].getAddress(), 100);
    expect(await contract.balanceOf(await accounts[0].getAddress())).to.eq(balanceSender.add(-100));
    expect(await contract.balanceOf(await accounts[1].getAddress())).to.eq(balanceReceiver.add(100));

    expect(contract.connect(accounts[2]).transfer(await accounts[1].getAddress(), 100)).revertedWith('not enough tokens')
  })

  // it("transferFrom function", async () => {
  //   expect(contract.transferFrom(await accounts[0].getAddress(), await accounts[1].getAddress(), 100)).revertedWith('not enough tokens')
  //   await contract.approve(await accounts[1].getAddress(), 200)
  //   expect(await contract.allowance(await accounts[0].getAddress(), await accounts[1].getAddress())).to.eq(200)

  //   let balanceSender: BigNumber = await contract.balanceOf(await accounts[0].getAddress())
  //   let balanceReceiver: BigNumber = await contract.balanceOf(await accounts[1].getAddress())
  //   await contract.transferFrom(await accounts[0].getAddress(), await accounts[1].getAddress(), 200)
  //   expect(await contract.balanceOf(await accounts[0].getAddress())).to.eq(balanceSender.add(-200));
  //   expect(await contract.balanceOf(await accounts[1].getAddress())).to.eq(balanceReceiver.add(200));
  // })

  // describe("burn and mint", function() {
  //   it("not an owner", async () => {
  //     expect(contract.connect(accounts[1]).burn(await accounts[0].getAddress(), 300)).revertedWith('not an owner')
  //     expect(contract.connect(accounts[1]).mint(await accounts[0].getAddress(), 300)).revertedWith('not an owner')
  //   })
  //   it("mint", async () => {
  //     let totalToken: BigNumber = await contract.totalSupply()
  //     await contract.mint(await accounts[0].getAddress(), 300)
  //     expect(await contract.totalSupply()).to.eq(totalToken.add(300))
  //   })
  //   it("burn", async () => {
  //     let totalToken: BigNumber = await contract.totalSupply()
  //     await contract.burn(await accounts[0].getAddress(), 300)
  //     expect(await contract.totalSupply()).to.eq(totalToken.add(-300))
  //   })
  // })
});
