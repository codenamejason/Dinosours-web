import React from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <section className="text-gray-600 body-font bg-nft-collage-background bg-repeat">
      <div className="bg-gray-intro-gray bg-no-repeat bg-cover bg-opacity-80">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-6xl faq-title text-white">Benefits</h1>
          </div>
          <div className="flex rounded-lg h-full p-8 flex-col bg-yellow-gold text-gray-900 border-4 border-yellow-brown shadow-xl">
            <div className="flex-grow mt-6 mb-6">
              <p className="text-left leading-relaxed text-base font-junge text-2xl">
                The Pharo NFTs are grouped into three categories: Common, Rare and Super Rare. All the Pharos come with
                different clothes, belts and heads, rarity depending. Accessories such as dogs, staffs, spears, crosses
                and others may be present and vary depending on the rarity. The most desirable of the Pharo NFTs, the
                Super Rares, will feature exclusive jewellery and silhouettes. These NFTs are being developed by an
                independent artist - Solomon -
              </p>
            </div>
            <div className="flex-grow mt-6 mb-6">
              <p className="text-left leading-relaxed text-base font-junge text-2xl">
                We wanted to ensure our NFTs held some intrinsic value, so we transformed each Pharo NFT into an index
                of ALL Pharo Markets 💰💸 Yes, an index like the Dow Jones or S&P 500 🤑 All Pharo NFTs will
                collectively earn 1% of ALL fees collected from ALL Pharo markets. Part of the idea here is to enable
                agents of Pharo, ambassadors, representatives, people who will evangelize because it’s in their
                fiduciary interest. As a measure of performance, the 1% dividend will be subject to change by the Pharo
                DAO. How much is 1% of all Pharo markets? Each market yields $PHRO token rewards until it stabilizes, at
                which point it’s a predictable money printer 💰🖨 crossing the chasm and attracting otherwise shy LPs and
                cover buyers. Pharo rewards the wisdom of crowds for discovering the rates at which market events occur,
                which covers 😏 everything from Hurricanes to rug pulls to stablecoin hacks to meme coin volatility to
                boomer currency pair volatility to government standards compliance to referees blowing calls… I could go
                on. So the question is, “How many markets do you believe Pharo will ultimately cover?” Let’s say the
                Total Cover Locked (TCL) of a Pharo market is $1MM (one-million), and each week cover buyers pay a
                collective premium of $100K, then the Pharo NFTs would collect $200 per week! $10MM TCL yields $2k/week
                … $1B TCL yields $200K per week 🤯🤯 ** We’ll be getting into the mathematics of Pharo market tokenomics
                in an upcoming blog post. Reach out if you’d like to be part of that conversation 👀
              </p>
            </div>
            <div className="flex-grow mt-6 mb-6">
              <p className="text-left leading-relaxed text-base font-junge text-2xl">
                We couldn’t have done this without our Pharo artist, Solomon, and we’re proud to give him 10% of the
                total mint and 20% of all royalties collected! Here’s a little about Solomon in his own words: “Hi! I am
                a 28 year old from Lithuania and studied in Klaipeda where I earned a degree in electrical engineering.
                I started to take interest in crypto about 2 years ago since I have a good friend who is particularly
                involved in crypto space. While I don’t have a lot of technical knowledge, my 'nose' for big potential
                projects has developed. Once I find something promising I ask myself how I can add some value. With
                Pharo I thought to myself “it's the place to be!”, so I needed to think how to be useful. I figured
                making art was a way to get involved and now here I am making Pharo NFTs.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
