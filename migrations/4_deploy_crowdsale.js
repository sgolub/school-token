const AltorosToken = artifacts.require("./AltorosToken.sol");
const AltorosCrowdsale = artifacts.require("./AltorosCrowdsale.sol");
const MultiSigWallet = artifacts.require('MultiSigWallet.sol');

module.exports = function(deployer, networks, accounts) {

  const openingTime = web3.eth.getBlock("latest").timestamp;
  const closingTime = openingTime + 60 * 60 * 24 * 31;
  const rate = new web3.BigNumber("1000");
  const wallet = MultiSigWallet.address;

  return deployer.deploy(
      AltorosCrowdsale,
      openingTime,
      closingTime,
      rate,
      wallet,
      AltorosToken.address
    );
};
