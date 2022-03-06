import { Button, Dropdown, Menu } from "antd";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { MoreHorizontal } from "react-feather";
import PayButton from "./PayButton";

export default function MintButton({ onClick, address, readContracts, writeContracts, loading, tx, mintNft }) {
  const [count, setCount] = useState(1);
  const priceList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const basePrice = 0.05;

  const amount = `${basePrice * count}`;

  const menu = (
    <Menu>
      {priceList.map(it => (
        <Menu.Item key={it} onClick={() => setCount(it)}>
          {it}
        </Menu.Item>
      ))}
    </Menu>
  );

  const ethPayHandler = async () => {
    console.log("faccckk");
    mintNft();
  };

  return (
    <div className="flex items-center justify-center">
      {/* <Button size="large" style={{ borderRadius: 0 }} onClick={() => onClick(count)} loading={loading}>
        Mint {count} for Ξ {basePrice * count}
      </Button> */}

      <PayButton
        style={{ borderRadius: 0 }}
        token={"ETH"}
        appName="DinoSours"
        callerAddress={address}
        amount={amount}
        spender={readContracts?.DinoSours?.address}
        message={{
          stage3: `Mint ${count} for ${amount} ETH`,
          stage4: `Minting...`,
        }}
        readContracts={readContracts}
        writeContracts={writeContracts}
        nativeCurrency={"ETH"}
        tx={tx}
        ethPayHandler={ethPayHandler}
      />

      <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
        <Button size="large" style={{ borderRadius: 0 }} disabled={loading}>
          <MoreHorizontal />
        </Button>
      </Dropdown>
    </div>
  );
}
