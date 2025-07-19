import useCounter from './hooks/useCounter';

function App() {

  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="container">
      <h1 className="heading">Count: {count}</h1>
      <div className="button-group">
        <button className="btn" onClick={increment}>Increment</button>
        <button className="btn" onClick={decrement}>Decrement</button>
        <button className="btn reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;

