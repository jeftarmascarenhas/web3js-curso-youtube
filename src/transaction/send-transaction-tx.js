import Web3 from "web3";
import { Transaction } from "ethereumjs-tx";

const url = "https://rinkeby.infura.io/v3/2943713c7b254b5eb3d4f68a10ea05c3";

const web3 = new Web3(url);

const addressFrom = "0x8D4Db00CD47035ECDeA0815bDB565b956b2844eb";
const addressTo = "0x66e0C8033c5FA672BeE59CA5C85837c12161f8cA";

const privateKey = Buffer.from(
  "ded123e4d4a3cae9d461230de47ec4d3d368502e74400b61e3051fb8094a5ed6",
  "hex"
);

const main = async () => {
  const txCount = await web3.eth.getTransactionCount(addressFrom);
  const rawTx = {
    nonce: web3.utils.toHex(txCount),
    from: addressFrom,
    to: addressTo,
    value: web3.utils.toHex(web3.utils.toWei("0.1", "ether")),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei("10", "Gwei")),
  };

  const tx = new Transaction(rawTx, { chain: "rinkeby" });

  tx.sign(privateKey);

  const serializedTransaction = tx.serialize();

  const raw = `0x${serializedTransaction.toString("hex")}`;

  const createReceipt = await web3.eth.sendSignedTransaction(raw);

  console.log(createReceipt.transactionHash);
};

main();
