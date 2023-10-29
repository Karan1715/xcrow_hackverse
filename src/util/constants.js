export const NFT_PORT_KEY = process.env.REACT_APP_NFT_PORT_KEY; // nft port key

export const APP_NAME = "Xcrows";
export const APP_DESC = "XDC-backed Advanced escrows requests"

export const CHAIN_OPTIONS = {
  50: {
    name: "XDC Mainnet",
    symbol: "XDC",
    rpc: "https://rpc.xinfin.network",
    url: "https://explorer.xinfin.network/",
    id: 50
  },
  51: {
    name: "XDC Testnet",
    symbol: "TXDC",
    rpc: "https://rpc.apothem.network",
    url: "https://explorer.apothem.network/",
    id: 51
  },
};

export const CHAIN_IDS = Object.keys(CHAIN_OPTIONS)

// 1: { name: "ethereum", url: "https://etherscan.io/tx/", id: 1 },
// 42: { name: "kovan", url: "https://kovan.etherscan.io/tx/", id: 42 },
// 4: { name: "rinkeby", url: "https://rinkeby.etherscan.io/tx/", id: 4 },


const USE_MAINNET = process.env.REACT_APP_USE_MAINNET === 'true'
export const ACTIVE_CHAIN = CHAIN_OPTIONS[USE_MAINNET ? "50" : "51"];

export const EXAMPLE_FORM = {
  title: "Bearable Software development agremeent MOU",
  description: "Please agree to the included Development onboard agreement document",
  signerAddress: "0x241D0a8c56b108AD734844c631B46a80Db4e4876",
  files: [],
};

export const IPFS_BASE_URL = "https://ipfs.io/ipfs"

console.log("config", NFT_PORT_KEY, ACTIVE_CHAIN);
