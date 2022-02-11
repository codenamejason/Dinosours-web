import { Button, Dropdown, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { MoreHorizontal } from "react-feather";
import PayButton from "./PayButton";
import { ethers } from "ethers";

export default function MintButton({ onClick, address, readContracts, writeContracts, loading }) {
  const [count, setCount] = useState(1);
  const priceList = [1, 2, 3, 4, 5];
  const basePrice = 0.04;

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

  const tokenPayHandler = async () => {
    await onClick(count);
  };

  const [wethBalance, setWethBalance] = useState(0);
  useEffect(() => {
    readContracts?.wETH?.balanceOf(address).then(r => {
      setWethBalance(r);
    });
    console.log("weth Bal", ethers.utils.formatEther(wethBalance.toString()));
  }, [address, amount]);

  return (
    <div className="flex items-center justify-center">
      {/* <Button size="large" style={{ borderRadius: 0 }} onClick={() => onClick(count)} loading={loading}>
        Mint {count} for Ξ {basePrice * count}
      </Button> */}
      {readContracts?.wETH && (
        <PayButton
          style={{ borderRadius: 0 }}
          token={"wETH"}
          appName="Pharo"
          callerAddress={address}
          amount={amount}
          spender={readContracts?.PharoNFT?.address}
          message={{
            stage3: `Mint ${count} for ${amount} ETH`,
            stage4: `Minting...`,
          }}
          readContracts={readContracts}
          writeContracts={writeContracts}
          tokenPayHandler={tokenPayHandler}
          nativeCurrency={"MATIC"}
          wethBalance={wethBalance}
        />
      )}
      <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
        <Button size="large" style={{ borderRadius: 0 }} disabled={loading}>
          <MoreHorizontal />
        </Button>
      </Dropdown>
    </div>
  );
}
