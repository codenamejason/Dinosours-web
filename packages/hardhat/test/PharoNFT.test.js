const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);

describe("My Dapp", function () {
  let PharoNFTContract;

  // quick fix to let gas reporter fetch data from gas station & coinmarketcap
  before((done) => {
    setTimeout(done, 2000);
  });

  describe("PharoNFT", function () {
    it("Should deploy PharoNFT", async function () {
      const PharoNFT = await ethers.getContractFactory("PharoNFT");

      PharoNFTContract = await PharoNFT.deploy();
    });
  });
});
