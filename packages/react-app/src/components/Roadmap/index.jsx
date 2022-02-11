import { Timeline } from "antd";
import React from "react";
import "./Roadmap.css";

const Roadmap = () => {
  return (
    <section className="text-gray-600 body-font bg-nft-collage-background bg-repeat">
      <div className="bg-gray-intro-gray bg-no-repeat bg-cover bg-opacity-80">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-6xl faq-title text-white">Roadmap</h1>
          </div>
          <Timeline mode="alternate">
            <Timeline.Item color="#C2A800" style={{ fontSize: "40px" }}>
              <h1 className="font-junge text-yellow-gold text-6xl">20% Minted</h1>
              <div className="flex rounded-lg h-full p-8 flex-col bg-yellow-gold text-white border-4 border-yellow-brown shadow-xl">
                <div className="flex-grow">
                  <p className="font-junge text-3xl">2 Ξ NFT Giveaway</p>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item color="#C2A800" style={{ fontSize: "40px" }}>
              <h1 className="font-junge text-yellow-gold text-6xl">40% Minted</h1>
              <div className="flex rounded-lg h-full p-8 flex-col bg-yellow-gold text-white border-4 border-yellow-brown shadow-xl">
                <div className="flex-grow">
                  <p className="font-junge text-3xl">2 Ξ NFT Giveaway</p>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item color="#C2A800" style={{ fontSize: "40px" }}>
              <h1 className="font-junge text-yellow-gold text-6xl">60% Minted</h1>
              <div className="flex rounded-lg h-full p-8 flex-col bg-yellow-gold text-white border-4 border-yellow-brown shadow-xl">
                <div className="flex-grow">
                  <p className="font-junge text-3xl">2 Ξ NFT Giveaway</p>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item color="#C2A800" style={{ fontSize: "40px" }}>
              <h1 className="font-junge text-yellow-gold text-6xl">80% Minted</h1>
              <div className="flex rounded-lg h-full p-8 flex-col bg-yellow-gold text-white border-4 border-yellow-brown shadow-xl">
                <div className="flex-grow">
                  <p className="font-junge text-3xl">2 Ξ NFT Giveaway</p>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item color="#C2A800" style={{ fontSize: "40px" }}>
              <h1 className="font-junge text-yellow-gold text-6xl">100% Minted</h1>
              <div className="flex rounded-lg h-full p-8 flex-col bg-yellow-gold text-white border-4 border-yellow-brown shadow-xl">
                <div className="flex-grow">
                  <p className="font-junge text-3xl">4 Ξ NFT Giveaway</p>
                </div>
              </div>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
