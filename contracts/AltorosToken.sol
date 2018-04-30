pragma solidity 0.4.23;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";


contract AltorosToken is MintableToken {

    string public name = "Altoros Token";
    string public symbol = "ALT";
    uint8 public decimals = 18;

}