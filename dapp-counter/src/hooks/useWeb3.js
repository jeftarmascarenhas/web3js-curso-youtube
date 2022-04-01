import { useEffect, useState } from "react";
import Web3 from "web3";

const UseWeb3 = ({ contractABI, contractAddress }) => {
  const [contract, setContract] = useState({});

  useEffect(() => {
    if (!contractABI && !contractAddress) return;
    const main = () => {
      if (!contractABI && !contractAddress) return;
      const web3 = new Web3(window.ethereum);
      const newContract = new web3.eth.Contract(contractABI, contractAddress);
      setContract(newContract);
    };
    main();
  }, [contractABI, contractAddress]);

  return { contract };
};

export default UseWeb3;
