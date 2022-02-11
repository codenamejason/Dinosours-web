import React from "react";
import SocialMedia from "../SocialMedia";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-yellow-gold border-yellow-brown border-t-4">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-white text-lg sm:text-md text-center sm:text-left font-junge">
          Powered by
          <a
            href="https://gitcoin.co/grants/2851/scaffold-eth"
            rel="noopener noreferrer"
            className="underline text-yellow-brown ml-1"
            target="_blank"
          >
            Scaffold-Eth 🏗
          </a>
        </p>
        <p className="text-white text-lg sm:text-md text-center sm:text-left font-junge ml-10">
          Artist
          <a href="#" rel="noopener noreferrer" className="underline text-yellow-brown ml-1" target="_blank">
            Solomon
          </a>
        </p>

        <SocialMedia />
      </div>
    </div>
  );
};

export default Footer;
