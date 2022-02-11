pragma solidity 0.7.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

contract PharoNFT is ERC721, Ownable {
    using SafeMath for uint256;
    using Strings for uint256;
    using SafeERC20 for IERC20;
    using Counters for Counters.Counter;

    // The token ids
    Counters.Counter private _tokenIds;

    string private _contractURI;

    /// @dev Max mint (totalSupply)
    uint256 public constant maxMint = 5040;

    /// @dev Max mint per address
    uint256 public constant maxMintPerAddress = 5;

    /// @dev Pharo operating wallet
    address public constant treasury =
        0xAda5A21e1882a69BC623054342c39A7c3D067Bc2;

    IERC20 public wETH;

    constructor(address _wETH) ERC721("Pharo's Collection", "PHROS") {
        wETH = IERC20(_wETH);
        _setBaseURI(_baseURI());
        transferOwnership(0xA4ca1b15fE81F57cb2d3f686c7B13309906cd37B);
    }

    function contractURI() public view returns (string memory) {
        return _contractURI;
    }

    /// @dev the base uri for the assets
    function _baseURI() internal pure returns (string memory) {
        return
            "https://pharo.mypinata.cloud/ipfs/QmP9QzGcxNT6s8f44YPKeCfqu8v14sMqkEe2WK41QCs7FP/";
    }

    /// @dev set the contract URI for OpenSea
    /// @param newUri the contract URI
    function setContractURI(string memory newUri) public onlyOwner {
        _contractURI = newUri;
    }

    /// @dev this is internal mint function
    /// @param to the user that is minting the token address
    /// @param tokenURI the uri for the token being minted
    function mintItem(address to, string memory tokenURI)
        private
        returns (uint256)
    {
        uint256 id = _tokenIds.current();
        _mint(to, id);
        _setTokenURI(id, tokenURI);

        return id;
    }

    /// @dev public mint function
    /// @param user the users address who is minting
    /// @param mintAmount the number to mint up to five (5)
    function mint(address user, uint256 mintAmount)
        external
        returns (uint256 id)
    {
        uint256 mintCost = mintAmount.mul(0.04 ether);
        require(
            maxMint >= _tokenIds.current(),
            "Minting has finished, fomo to OpenSea ser..."
        );
        require(
            mintAmount > 0 && mintAmount <= maxMintPerAddress,
            "You cannot mint more than 5 at a time ser..."
        );
        require(
            wETH.balanceOf(msg.sender) >= mintCost,
            "You didn't send enough wETH for that many ser..."
        );
        require(
            wETH.allowance(msg.sender, address(this)) >= mintCost,
            "Not enough wETH allowance to purchase."
        );

        // mint number of tokens specified by user
        for (uint256 i = 0; i < mintAmount; i++) {
            _tokenIds.increment();
            id = _tokenIds.current();
            mintItem(user, string(abi.encodePacked(id.toString(), ".json")));
        }

        // transfer ETH to treasury
        wETH.safeTransferFrom(msg.sender, treasury, mintCost);

        return id;
    }

    /// @dev public function to set the token URI
    /// @param _tokenId the id of the token to update
    /// @param _tokenURI the new token URI
    function setTokenURI(uint256 _tokenId, string memory _tokenURI)
        public
        onlyOwner
    {
        _setTokenURI(_tokenId, _tokenURI);
    }
}
