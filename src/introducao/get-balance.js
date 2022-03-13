import Web3 from "web3";

const web3 = new Web3(
  "https://mainnet.infura.io/v3/621ff26ea2d349a49edf7e0a9b801b02"
);
const contractAddress = "0xB8c77482e45F1F44dE1745F52C74426C631bDD52";

const getBalance = async () => {
  const balance = await web3.eth.getBalance(contractAddress);
  const balanceFormat = web3.utils.fromWei(balance, "ether");

  console.log(balanceFormat);
};

getBalance();
