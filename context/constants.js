import { ethers } from "ethers";
import Web3Modal from "web3modal";
import axios from "axios";

//IMPORT CONTRACT ABI
import tokenICO from "./TokenICO.json";
import erc20 from "./ERC20.json";

 //export const TOKEN_ADDRESS ="0x33672f27D7b98A4b7AC0F4798367D36C0089F076";
//intital=>//
export const TOKEN_ADDRESS = "0xA8AAe50c67Ac480D81aC54EcF61FD45e309F705C";
export const ERC20_ABI = erc20.abi;

export const OWNER_ADDRESS ="0xB598705BfF3D32011c6D49150065797003D125A4";

// Initial//export const OWNER_ADDRESS = "0xb309098bcB51E5C687a16FA41bD6055f47c9eBb0";

//export const CONTRACT_ADDRESS = "0x4efC8f66A0567B5320f5B3c0D96367Fd6Ed6fB9c"

//initital==> //
export const CONTRACT_ADDRESS = "0x788873EfB21a0743dCE048A733D7deA756E12145";
export const CONTRACT_ABI = tokenICO.abi;

//NETWORK
const networks = {
  polygon_amoy: {
    chainId: `0x${Number(80002).toString(16)}`,
    chainName: "Polygon Amoy",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-amoy.polygon.technology/"],
    blockExplorerUrls: ["https://www.oklink.com/amoy"],
  },
  polygon_mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Mumbai",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon_mumbai"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/bsc"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_mainnet: {
    chainId: `0x${Number(8453).toString(16)}`,
    chainName: "Base Mainnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.base.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_sepolia: {
    chainId: `0x${Number(84532).toString(16)}`,
    chainName: "Base Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.base.org"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "GO",
      symbol: "GO",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const handleNetworkSwitch = async () => {
  const networkName = "polygon_amoy";
  await changeNetwork({ networkName });
};

export const CHECK_WALLET_CONNECTED = async () => {
  if (!window.ethereum) return console.log("Please Install MetaMask");
  const network = await handleNetworkSwitch();

  const account = await window.ethereum.request({ method: "eth_accounts" });

  if (account.length) {
    return account[0];
  } else {
    console.log("Please Install MetaMask & Connect, Reload");
  }
};

export const CONNECT_WALLET = async () => {
  try {
    if (!window.ethereum) return alert("Please install MetaMask");
    const network = await handleNetworkSwitch();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    window.location.reload();
    return accounts[0];
  } catch (error) {
    console.log(error);
  }
};

//---FETCHING SMART CONTRACT

const fetchContract = (address, abi, signer) =>
  new ethers.Contract(address, abi, signer);

export const TOKEN_ICO_CONTRACT = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract", error);
  }
};

export const ERC20 = async (ADDRESS) => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const newtork = await provider.getNetwork();

    const signer = provider.getSigner();
    const contract = fetchContract(ADDRESS, ERC20_ABI, signer);

    //USER ADDRESS
    const userAddress = signer.getAddress();
    const balance = await contract.balanceOf(userAddress);

    const name = await contract.name();
    const symbol = await contract.symbol();
    const supply = await contract.totalSupply();
    const decimals = await contract.decimals();
    const address = await contract.address;

    const token = {
      address: address,
      name: name,
      symbol: symbol,
      decimals: decimals,
      supply: ethers.utils.formatEther(supply.toString()),
      balance: ethers.utils.formatEther(balance.toString()),
      chainId: newtork.chainId,
    };
    console.log(token);
    return token;
  } catch (error) {
    console.log(error);
  }
};

export const ERC20_CONTRACT = async (CONTRACT_ADDRESS) => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(CONTRACT_ADDRESS, ERC20_ABI, signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract", error);
  }
};

export const GET_BALANCE = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const maticBal = await signer.getBalance();
    return ethers.utils.formatEther(maticBal.toString());
  } catch (error) {
    console.log(error);
  }
};

export const CHECK_ACCOUNT_BALANCE = async (ADDRESS) => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const maticBal = await provider.getBalance(ADDRESS);

    return ethers.utils.formatEther(maticBal.toString());
  } catch (error) {
    console.log(error);
  }
};

export const addTokenToMetaMask = async () => {
  if (window.ethereum) {
    const tokenDeatils = await ERC20(TOKEN_ADDRESS);

    const tokenDecimals = tokenDeatils?.decimals;
    const tokenAddress = TOKEN_ADDRESS;
    const tokenSymbol = tokenDeatils?.symbol;
    const tokenImage =
      "https://www.daulathussain.com/wp-content/uploads/2024/05/theblockchaincoders.jpg";

    try {
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });

      if (wasAdded) {
        return "Token added!";
      } else {
        return "Token not added";
      }
    } catch (error) {
      return "Failed to add";
    }
  } else {
    return "MetaMask is not installed";
  }
};
