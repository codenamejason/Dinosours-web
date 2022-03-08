// SPDX-License-Identifier: MIT
pragma solidity 0.7.6;

import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract Royalties {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    // Royalties distro percentages
    uint256 private buidlguidl = 10;
    uint256 private dinosours = 80;
    uint256 private ethana = 10;

    // Royalties distro addresses
    address private buidlguidlAddress = 0x97843608a00e2bbc75ab0C1911387E002565DEDE;
    address private dinosoursAddy = 0x695392F1f7900bBB8bcc2Fc6991c22FCb0794342;
    address private ethanaAddress = 0x26Df1f32bEBA11048fa9615e08C7f6ABa02231D3;

    modifier canWithdraw() {
        require(
                msg.sender == buidlguidlAddress ||
                msg.sender == dinosoursAddy ||
                msg.sender == ethanaAddress
        );
        _;
    }

    /// @dev allows withdraw of any tokens getting stuck in contract
    function withdraw(address token) public canWithdraw {
        uint256 balance;
        if (token != address(0)) {
            balance = IERC20(token).balanceOf(address(this));
        } else {
            balance = address(this).balance;
        }

        require(balance > 0, "Nothing to withdraw");

        _receiveAndSplit(token, balance, address(this));
    }

    function _receiveAndSplit(
        address token,
        uint256 amountToSplit,
        address from
    ) internal {
        uint256 amountForBuidlGuidl = uint256(amountToSplit.div(100).mul(buidlguidl));
        uint256 amountForJax = uint256(amountToSplit.div(100).mul(dinosours));
        uint256 amountForEthana = uint256(amountToSplit.div(100).mul(ethana));

        if (token != address(0)) {
            IERC20(token).safeTransferFrom(from, buidlguidlAddress, amountForBuidlGuidl);
            IERC20(token).safeTransferFrom(from, dinosoursAddy, amountForJax);
            IERC20(token).safeTransferFrom(from, ethanaAddress, amountForEthana);
        } else {
            bool success;
            (success, ) = buidlguidlAddress.call{value: amountForBuidlGuidl}("");
            require(success, "BG transaction failed");
            (success, ) = dinosoursAddy.call{value: amountForJax}("");
            require(success, "Dino transaction failed");
            (success, ) = ethanaAddress.call{value: amountForEthana}("");
            require(success, "Ethana transaction failed");
        }
    }

    fallback() external payable {}
}
