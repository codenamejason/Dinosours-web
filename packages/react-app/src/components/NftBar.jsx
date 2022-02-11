import React from "react";

import nft1 from "../assets/img/nft1.svg";
import nft2 from "../assets/img/nft2.svg";
import nft3 from "../assets/img/nft3.svg";
import nft4 from "../assets/img/nft4.svg";
import nft5 from "../assets/img/nft5.png";

// I would like to show the 5 latest minted NFTs here...
let yourPharos = [];


const NftBar = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-wrap">
        <div className="w-1/5">
          <img src={nft1} className="object-cover object-center h-full w-full" />
        </div>
        <div className="w-1/5">
          <img src={nft2} className="object-cover object-center h-full w-full" />
        </div>
        <div className="w-1/5">
          <img src={nft3} className="object-cover object-center h-full w-full" />
        </div>
        <div className="w-1/5">
          <img src={nft4} className="object-cover object-center h-full w-full" />
        </div>
        <div className="w-1/5">
          <img src={nft5} className="object-cover object-center h-full w-full" />
        </div>
      </div>
      <div className="flex flex-wrap bg-yellow-gold h-12 border-b-4 border-yellow-brown"></div>
    </section>
  );
};

export default NftBar;
