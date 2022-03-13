import Web3 from "web3";

const web3 = new Web3("http://127.0.0.1:7545");

const getAccounts = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log(accounts);
};

getAccounts();
