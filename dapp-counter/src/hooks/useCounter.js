import { useCallback, useEffect, useState } from "react";
import ContractCounter from "../contracts/counter.json";
import UseWeb3 from "./useWeb3";

const UseCounter = (currentAccount) => {
  const { contract } = UseWeb3({
    contractABI: ContractCounter.abi,
    contractAddress: ContractCounter.address,
  });

  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const getCount = useCallback(async () => {
    try {
      setLoading(true);
      const countData = await contract.methods.count().call();
      setCount(countData);
      setLoading(false);
    } catch (error) {
      console.error("getCount = ", error);
    }
  }, [contract]);

  const increment = async () => {
    try {
      setLoading(true);
      await contract.methods.increment().send({
        from: currentAccount,
      });
      getCount();
    } catch (error) {
      console.error(error);
    }
  };

  const decrement = async () => {
    try {
      setLoading(true);
      await contract.methods.decrement().send({
        from: currentAccount,
      });
      getCount();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (contract && contract.methods) {
      getCount();
    }
  }, [contract, getCount]);

  return { count, loading, increment, decrement };
};

export default UseCounter;
