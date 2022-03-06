import { Button } from "antd";
import { ethers } from "ethers";
import React, { useState } from "react";

const loadingStatus = [0, 2, 4];
const disabledStatus = [...loadingStatus, 5];

export default function PayButton({
  token,
  amount = "0",
  style = {},
  readContracts,
  writeContracts,
  yourLocalBalance = ethers.BigNumber.from(0),
  tx,
  ethPayHandler,
  nativeCurrency,
  message,
}) {
  const [tokenInfo, setTokenInfo] = useState({});
  const [status, setStatus] = useState(3); // loading | lowAllowance | approving | ready | distributing | noBalance

  const isETH = () => {
    return token.toUpperCase() === nativeCurrency;
  };

  const handlePay = async () => {
    if (isETH()) {
      setStatus(4);
      await ethPayHandler();
      setStatus(3);
    }
  };

  const renderButtonText = () => {
    let text = "Loading...";

    switch (status) {
      case 3:
        text = message.stage3;
        break;
      case 4:
        text = message.stage4;
        break;
      case 5:
        text = `~ Not enough ETH`;
        break;
      default:
        text = "Loading...";
        break;
    }

    return text;
  };

  return (
    <Button
      size="large"
      disabled={disabledStatus.indexOf(status) >= 0 || !(amount > 0)}
      loading={loadingStatus.indexOf(status) >= 0}
      style={style}
      onClick={handlePay}
    >
      {renderButtonText()}
    </Button>
  );
}
