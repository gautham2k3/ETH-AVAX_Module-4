require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const FORK_FUJI = false;
const FORK_MAINNET = false;
let forkingData = undefined;

if (FORK_MAINNET) {
  forkingData = {
    url: "https://avalanche-fuji-c-chain.publicnode.com",
  };
}
if (FORK_FUJI) {
  forkingData = {
    url: "https://avalanche-fuji-c-chain.publicnode.com",
  };
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      gasPrice: 225000000000,
      chainId: !forkingData ? 43112 : undefined, //Only specify a chainId if we are not forking
      forking: forkingData,
    },
    fuji: {
      url: "https://avalanche-fuji-c-chain.publicnode.com",
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [process.env.AVAXTEST], // we use a .env file to hide our wallets private key
    },
    mainnet: {
      url: "https://avalanche-fuji-c-chain.publicnode.com",
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [process.env.AVAXTEST],
    },
  },
  etherscan: {
    apiKey: process.env.SNOWTRACE_API_KEY, // we use an .env file to hide our Snowtrace API KEY
  },
};
