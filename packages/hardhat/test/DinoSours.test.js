const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);

describe("My Dapp", function () {
  let DinoSoursContract;

  // quick fix to let gas reporter fetch data from gas station & coinmarketcap
  before((done) => {
    setTimeout(done, 2000);
  });

  describe("DinoSours", function () {
    it("Should deploy DinoSours", async function () {
      const DinoSours = await ethers.getContractFactory("DinoSours");

      DinoSoursContract = await DinoSours.deploy();
    });
  });
});
