require("dotenv/config");
require("@nomiclabs/hardhat-waffle");

const endpointUrl = "https://eth-sepolia.public.blastapi.io";
const privateKey = process.env.PRIVATEKEY;

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: endpointUrl,
      accounts: [privateKey],
    },
  },
};
