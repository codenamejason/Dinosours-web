import { useContractReader } from "eth-hooks";
import React, { useEffect, useState } from "react";
import sample5 from "../../assets/img/gallery_gif.gif";
import { MintButton } from "../../components";
import "./Gallery.css";

//helper function to "Get" from IPFS
// you usually go content.toString() after this...
const getFromIPFS = async hashToGet => {
  for await (const file of ipfs.get(hashToGet)) {
    console.log(file.path);
    if (!file.content) continue;
    const content = new BufferList();
    for await (const chunk of file.content) {
      content.append(chunk);
    }
    console.log(content);
    return content;
  }
};

const Gallery = ({
  readContracts,
  writeContracts,
  tx,
  address,
  localProvider,
  injectedProvider,
  loadWeb3Modal,
  mainnetProvider,
}) => {
  const [minting, setMinting] = useState(false);
  const isSigner = injectedProvider && injectedProvider.getSigner && injectedProvider.getSigner()._isSigner;
  const balance = useContractReader(readContracts, "DinoSours", "balanceOf", [address]);
  console.log("Your DinoSours Balance: ", balance && balance.toNumber && balance.toNumber());

  // const transferEvents = useEventListener(readContracts, "DinoSours", "Transfer", localProvider, 1);
  // console.table("Transfer Events: ", transferEvents);

  // todo: add the parameter mintAmount to be passed in
  const mintNft = async mintAmount => {
    const saleAmount = 0.05;
    //console.log(mintAmount && mintAmount);
    if (mintAmount > 20) {
      return;
    }
    await tx(writeContracts.DinoSours.mint(mintAmount && mintAmount), async update => {
      console.log("📡 Transaction Update:", update);
      if (update && (update.status === "confirmed" || update.status === 1)) {
        // reset minting
        setMinting(true);
        console.log(" 🍾 Transaction " + update.hash + " finished!");
        console.log(
          " ⛽️ " +
            update.gasUsed +
            "/" +
            (update.gasLimit || update.gas) +
            " @ " +
            parseFloat(update.gasPrice) / 1000000000 +
            " gwei",
        );
      }
      setMinting(false);
    });
  };

  const [totalMinted, setTotalMinted] = useState(0);
  const tokensMinted = async () => {
    (await readContracts) &&
      readContracts.DinoSours &&
      readContracts.DinoSours.totalSupply().then(e => {
        setTotalMinted(e);
      });
  };

  useEffect(() => {
    tokensMinted();
    console.log("Minted: ", totalMinted.toString());
  }, [minting, balance]);

  return (
    <div>
      <div className="m-auto mt-8">
        <h1 className="intro-title sm:text-4xl text-5xl">DinoSours</h1>
        {/* I want to show the totalMinted here vvvv */}
        <h3 className="intro-title-subtitle sm:text-2xl text-3xl">
          {totalMinted.toString()} minted of 4444 Total Supply
        </h3>
        <h4>.05 Optimistic ETH</h4>
      </div>
      <div className="m-auto">
        {isSigner ? (
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
              <div className="lg:w-2/3 md:w-1/2 overflow-hidden sm:mr-10 p-2 flex items-end justify-start relative">
                <div className="m-auto">
                  <a href={"https://quixotic.io/collection/dinosours"} target="_blank">
                    <img src={sample5} />
                  </a>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 align-middle">
                <MintButton
                  onClick={mintNft}
                  loading={minting}
                  address={address}
                  readContracts={readContracts}
                  writeContracts={writeContracts}
                  tx={tx}
                  mintNft={mintNft}
                />
              </div>
            </div>
          </section>
        ) : (
          <button
            onClick={loadWeb3Modal}
            className="text-white font-junge bg-yellow-gold border-4 border-yellow-brown py-2 px-6 focus:outline-none hover:bg-yellow-brown rounded text-lg"
          >
            CONNECT WALLET
          </button>
        )}
      </div>
    </div>
  );
};

export default Gallery;
