pragma solidity 0.7.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract DinoSours is ERC721, Ownable {
    using SafeMath for uint256;
    using Strings for uint256;
    using Counters for Counters.Counter;

    // The token ids
    Counters.Counter private _tokenIds;

    string private _contractURI = "";

    /// @dev Max mint (totalSupply)
    uint256 public constant maxMint = 4444;

    /// @dev Max mint per address
    uint256 public constant maxMintPerTx = 20;

    /// @dev Dinosours multi-sig
    address public constant treasury =
        0x695392F1f7900bBB8bcc2Fc6991c22FCb0794342;

    constructor() ERC721("DinoSours Collection", "DINOSOURS") {
        _setBaseURI(_baseURI());
        transferOwnership(0xA4ca1b15fE81F57cb2d3f686c7B13309906cd37B);
    }

    function contractURI() public view returns (string memory) {
        return _contractURI;
    }

    /// @dev the base uri for the assets
    function _baseURI() internal pure returns (string memory) {
        return
            "https://dinosours.mypinata.cloud/ipfs/QmfGwbmbDUDPd7dwL22HeTRoW9fWAjF6HK2FwsdUuEuy13/";
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
    /// @param mintAmount the number to mint up to five (5)
    function mint(uint256 mintAmount)
        public
        payable
        returns (uint256 id)
    {
        uint256 mintCost = mintAmount.mul(0.05 ether);
        require(
            maxMint >= _tokenIds.current(),
            "Minting has finished, fomo to OpenSea ser..."
        );
        require(
            mintAmount > 0 && mintAmount <= maxMintPerTx,
            "You cannot mint more than 20 at a time ser..."
        );
        require(
            msg.value >= mintCost,
            "You didn't send enough ETH for that many ser..."
        );

        // mint number of tokens specified by user
        for (uint256 i = 0; i < mintAmount; i++) {
            _tokenIds.increment();
            id = _tokenIds.current();
            mintItem(msg.sender, string(abi.encodePacked(id.toString(), ".json")));
        }

        // transfer ETH to treasury
        (bool sent, ) = treasury.call{value: mintCost}("");
        require(sent, "Transfer to treasury failed.");

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
