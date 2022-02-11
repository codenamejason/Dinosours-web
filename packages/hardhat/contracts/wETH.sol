//SPDX-License-Identifier: MIT
pragma solidity 0.7.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract wETH is ERC20 {
    constructor(address admin) ERC20("wrapped ETH", "wETH") {
        _mint(admin, 1000 ether);
    }

    function faucetMint() public {
        _mint(msg.sender, 1000 ether);
    }
}
