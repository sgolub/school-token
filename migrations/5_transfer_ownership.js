const AltorosToken = artifacts.require("./AltorosToken.sol");
const AltorosCrowdsale = artifacts.require("./AltorosCrowdsale.sol");

module.exports = (deployer) => deployer.then(() => {
  return AltorosToken.deployed();
}).then(Token => {
  return Token.transferOwnership(AltorosCrowdsale.address);
});