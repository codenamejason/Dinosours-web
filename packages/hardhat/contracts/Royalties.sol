// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Royalties {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    // Royalties distro percentages
    uint256 private buidlguidl = 10;
    uint256 private jax = 80;
    uint256 private ethana = 10;

    // Royalties distro addresses
    address private buidlguidlAddress = 0x5C37b9f5324bAFB44E10e35E9cB035425F24Ee4E;
    address private jaxAddy = 0xE6995fDB691aad061e45df31A7C407792A52565A;
    address private ethanaAddress = 0xA9EC89f38a1dC912F1726EE66409a840fFc6a709;

    modifier canWithdraw() {
        require(
            msg.sender == bannersWarChestAddy ||
                msg.sender == ghostAddy ||
                msg.sender == jaxAddy ||
                msg.sender == fahimAddy
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
        uint256 amountForGhost = uint256(amountToSplit.div(100).mul(ghost));
        uint256 amountForJax = uint256(amountToSplit.div(100).mul(jax));
        uint256 amountForFahim = uint256(amountToSplit.div(100).mul(fahim));
        uint256 amountForBanners = uint256(amountToSplit.div(100).mul(banners));

        if (token != address(0)) {
            IERC20(token).safeTransferFrom(from, ghostAddy, amountForGhost);
            IERC20(token).safeTransferFrom(from, jaxAddy, amountForJax);
            IERC20(token).safeTransferFrom(from, fahimAddy, amountForFahim);
            IERC20(token).safeTransferFrom(
                from,
                bannersWarChestAddy,
                amountForBanners
            );
        } else {
            bool success;
            (success, ) = ghostAddy.call{value: amountForGhost}("");
            require(success, "Ghost transaction failed");
            (success, ) = jaxAddy.call{value: amountForJax}("");
            require(success, "Jax transaction failed");
            (success, ) = fahimAddy.call{value: amountForFahim}("");
            require(success, "Fahim transaction failed");
            (success, ) = bannersWarChestAddy.call{value: amountForBanners}("");
            require(success, "Banners transaction failed");
        }
    }

    fallback() external payable {}
}
