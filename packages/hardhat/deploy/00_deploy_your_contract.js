// deploy/00_deploy_your_contract.js

const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  let wETH = { address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619" };

  // mock wETH for non polygon mainnet
  if (chainId !== "137") {
    wETH = await deploy("wETH", {
      from: deployer,
      args: [process.env.DEVELOPER],
      log: true,
    });
  }

  // deploy PharoNFT
  await deploy("PharoNFT", {
    from: deployer,
    args: [wETH.address],
    log: true,
  });

  const PharoNFTContract = await ethers.getContract("PharoNFT");

  if (chainId === "31337") {
    const deployerWallet = ethers.provider.getSigner();
    await deployerWallet.sendTransaction({
      to: process.env.DEVELOPER,
      value: ethers.utils.parseEther("1"),
    });
  }

  // todo: set the contract uri
  // todo: set gas or it will fail
  // const setUriTx = await PharoNFTContract.setContractURI("");
  // setUriTx.wait(1);

  if (chainId !== "31337") {
    await run("verify:verify", {
      address: PharoNFTContract.address,
      contract: "contracts/PharoNFT.sol:PharoNFT",
      constructorArguments: [wETH.address],
    });
  }
};
module.exports.tags = ["PharoNFT", "wETH"];
