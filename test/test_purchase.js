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

    const buyer = accounts[0];
    const owner1 = accounts[1];
    const owner2 = accounts[2];

    await Crowsale.buyTokens(Wallet.address, {
      from: buyer,
      value: web3.toWei(1, 'Ether')
    });

    const transfer = Token.transfer.request(buyer, "1e+21").params[0].data;

    await Wallet.submitTransaction(Token.address, "0x0", transfer, {
      from: owner1,
      gas: 600000
    });

    await Wallet.confirmTransaction("0x0", {
      from: owner2,
      gas: 600000
    });

    let walletBalance = await web3.eth.getBalance(Wallet.address);
    console.log("    Wallet: ", web3.fromWei(walletBalance, "ether").toString(), " ETH");

    let balance = await Token.balanceOf(buyer);
    console.log("    Buyer: ", balance.toString(), " ALT");

    assert.equal(balance.toString(), "1e+21");

  });
});