import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

import "./tasks/approve";
import "./tasks/allowance";
import "./tasks/burn";
import "./tasks/mint";
import "./tasks/transferFrom";
import "./tasks/transfer";
import "./tasks/balance";
import "./tasks/decimals";
import "./tasks/name";
import "./tasks/symbol";
import "./tasks/totalSupply";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? process.env.PRIVATE_KEY_OPTINAL !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_OPTINAL] : [] : [],
        
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
