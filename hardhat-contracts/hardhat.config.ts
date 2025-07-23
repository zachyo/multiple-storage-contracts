import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const { PRIVATE_KEY, ETHERSCAN_KEY, SEPOLIA_URL_KEY, CORE_DAO_URL_KEY } =
  process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: SEPOLIA_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    "core-dao": {
      url: CORE_DAO_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
      gasPrice: 100000000000,
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_KEY as string,
    },
  },
};

export default config;
