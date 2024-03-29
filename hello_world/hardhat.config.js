/**
 * @type import('hardhat/config').HardhatUserConfig
 */
var dotenvExpand = require('dotenv-expand');
var myEnv = require('dotenv').config();
dotenvExpand.expand(myEnv)
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");

const { API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
      apiKey: ETHERSCAN_API_KEY
    }
}
