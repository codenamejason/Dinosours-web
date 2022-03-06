// deploy/00_deploy_dinosour.js

const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  // deploy PharoNFT
  await deploy("DinoSours", {
    from: deployer,
    args: [],
    log: true,
  });

  const DinoSoursContract = await ethers.getContract("DinoSours");

  // if (chainId === "31337") {
  //   const deployerWallet = ethers.provider.getSigner();
  //   await deployerWallet.sendTransaction({
  //     to: process.env.DEVELOPER,
  //     value: ethers.utils.parseEther("1"),
  //   });
  // }

  // todo: set the contract uri
  // todo: set gas or it will fail
  // const setUriTx = await DinoSours.setContractURI("");
  // setUriTx.wait(1);

  if (chainId !== "31337") {
    // await run("verify:verify", {
    //   address: DinoSoursContract.address,
    //   contract: "contracts/DinoSours.sol:DinoSours",
    //   constructorArguments: [],
    // });
  }
};
module.exports.tags = ["DinoSours"];
