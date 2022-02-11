import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/PharoACM/Pharo-NFT-official" target="_blank" rel="noopener noreferrer">
      <PageHeader title="Pharo NFT" subTitle="Liquidity for Volitile Events" style={{ cursor: "pointer" }} />
    </a>
  );
}
