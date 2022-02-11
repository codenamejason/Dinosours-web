import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <section className="text-gray-600 body-font bg-nft-collage-background bg-repeat">
      <div className="bg-gray-intro-gray bg-no-repeat bg-cover bg-opacity-80">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-6xl faq-title text-white">FAQ</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col bg-yellow-gold text-white border-4 border-yellow-brown">
                <h2 className="text-gray-900 text-2xl title-font font-medium font-junge">Minting</h2>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base font-junge text-xl text-left">
                    Q: I heard there were dividends for token owners?
                    <br />
                    <br />
                    A: Yes, you will get 1% of market fees collected split amongst all token holders.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col bg-yellow-gold text-white border-4 border-yellow-brown">
                <h2 className="text-gray-900 text-2xl title-font font-medium font-junge">Community</h2>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base font-junge text-xl text-left">
                    Q: How much is that 1% worth?
                    <br />
                    <br />
                    A: About $2000 per week per $10MM TVL.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col bg-yellow-gold text-white border-4 border-yellow-brown">
                <h2 className="text-gray-900 text-2xl title-font font-medium font-junge">Giveaways</h2>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base font-junge text-xl text-left">
                    Q: Does a certain rarity pay more dividends?
                    <br />
                    <br />
                    A: Yes, the dividends are broken up into tranches based on rarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
