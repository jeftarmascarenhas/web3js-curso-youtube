import Web3 from "web3";

const url = "https://rinkeby.infura.io/v3/2943713c7b254b5eb3d4f68a10ea05c3";

const web3 = new Web3(url);

const addressFrom = "0x8D4Db00CD47035ECDeA0815bDB565b956b2844eb";
const addressTo = "0x66e0C8033c5FA672BeE59CA5C85837c12161f8cA";

const privateKey =
  "ded123e4d4a3cae9d461230de47ec4d3d368502e74400b61e3051fb8094a5ed6";

const main = async () => {
  const tx = await web3.eth.accounts.signTransaction(
    {
      from: addressFrom,
      to: addressTo,
      value: web3.utils.toWei("0.1", "ether"),
      chain: "rinkeby",
      hardfork: "London",
      gas: "210000",
    },
    privateKey
  );

  console.log(tx.rawTransaction);

  const createReceipt = await web3.eth.sendSignedTransaction(tx.rawTransaction);

  console.log(createReceipt.transactionHash);
};

main();
