const MultiSigWallet = artifacts.require('./MultiSigWallet.sol');

module.exports = function (deployer, networks, accounts) {
  deployer.deploy(MultiSigWallet, [accounts[1], accounts[2], accounts[3]], 2);
};