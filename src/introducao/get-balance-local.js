import Web3 from "web3";

// Neste exemplo você precisa ter o Ganche instalado.
// Ganache é o blockchain para utilizar localmente na sua máquina.

const web3 = new Web3("http://127.0.0.1:7545");
const contractAddress = "0xdF2B30Edc90F6635Db7d36eFC1d8991ffc5a895e";

const getBalance = async () => {
  const balance = await web3.eth.getBalance(contractAddress);
  const balanceFormat = web3.utils.fromWei(balance, "ether");

  console.log(balanceFormat);
};

getBalance();
