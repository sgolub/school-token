const AltorosToken = artifacts.require("./AltorosToken.sol");
const AltorosCrowdsale = artifacts.require("./AltorosCrowdsale.sol");
const MultiSigWallet = artifacts.require('./MultiSigWallet.sol');

contract("AltorosToken", accounts => {
  it('should buy tokens', async () => {

    const [Token, Crowsale, Wallet] = await Promise.all([
      AltorosToken.deployed(),
      AltorosCrowdsale.deployed(),
      MultiSigWallet.deployed()
    ]);

    await Crowsale.buyTokens(Wallet.address, {
      from: accounts[0],
      value: web3.toWei(1, 'Ether')
    });

    const balance = await Token.balanceOf(Wallet.address);

    assert.equal(balance.toString(), "1e+21");

    // const data = Token.transfer.request(accounts[0], "1e+21").params[0].data;

    // const transactionId = await Wallet.submitTransaction(Token.address, "0x0", data, { from: accounts[0] });

    // console.log(transactionId);

  });
});