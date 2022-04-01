import logo from "./logo.svg";
import "./App.css";
import UseCounter from "./hooks/useCounter";
import { UseMetaMask } from "./hooks/useWallet";

function App() {
  const { connectMetaMask, isConnected, currentAccount } = UseMetaMask();
  const { count, loading, increment, decrement } = UseCounter(currentAccount);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCCyxBPhe_gCIFx85BLXsUMA"
          target="_blank"
          rel="noopener noreferrer"
        >
          NFT Choose Youtube Channel
        </a>
        <p>{loading ? "loading..." : "Dapp Counter"}</p>
        <div className="App-counter">
          <button
            className="btn-connect"
            onClick={connectMetaMask}
            disabled={isConnected}
          >
            {isConnected ? "Connected" : "Connect Wallet"}
          </button>
          <button onClick={increment} disabled={!isConnected}>
            Increment
          </button>
          <button onClick={decrement} disabled={!isConnected}>
            Decrement
          </button>
          <p className="count">{count}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
