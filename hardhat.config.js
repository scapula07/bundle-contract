require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
   networks: {
    goerli: {
        url: `https://eth-goerli.g.alchemy.com/v2/sgcBjikzerJibFP56D_ohhvTV54WChaZ`,
        accounts: [`0x${"pvt"}`]
    },
    bsc: {
      url: `https://data-seed-prebsc-1-s3.binance.org:8545`,
      accounts: [`0x${"pvt"}`]
  }
  }
};
