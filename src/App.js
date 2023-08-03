import React, { useState } from "react";
import "./App.css";

const QueueReactApp = () => {
  const [maxEntry, setMaxEntry] = useState(5); // Default max entry limit is set to 5
  const [queue, setQueue] = useState([]);

  const enqueue = () => {
    if (queue.length < maxEntry) {
      const newQueue = [...queue, Math.floor(Math.random() * 100)]; // Adding a random number to the queue
      setQueue(newQueue);
    }
  };

  const dequeue = () => {
    if (queue.length > 0) {
      const newQueue = queue.slice(1);
      setQueue(newQueue);
    }
  };

  const showFront = () => {
    if (queue.length > 0) {
      alert(`Front item: ${queue[0]}`);
    }
  };

  const isEmpty = () => {
    alert(`Queue is empty: ${queue.length === 0}`);
  };

  const isFull = () => {
    alert(`Queue is full: ${queue.length === maxEntry}`);
  };

  const clearAll = () => {
    setQueue([]);
  };

  return (
    <div className="App">
      <h1>Queue React App</h1>
      <div>
        <label>Max Entry: &nbsp;  </label>
        <input
          type="number"
          value={maxEntry}
          onChange={(e) => setMaxEntry(parseInt(e.target.value))}
        />
      </div>
      <button onClick={enqueue} disabled={queue.length === maxEntry}>
        Enqueue
      </button>
      <button onClick={dequeue} disabled={queue.length === 0}>
        Dequeue
      </button>
      <button onClick={showFront} disabled={queue.length === 0}>
        Front
      </button>
      <button onClick={isEmpty}>isEmpty</button>
      <button onClick={isFull}>isFull</button>
      <button onClick={clearAll}>Clear all</button>
      <div>
        <h2>Queue:</h2>
        {queue.length > 0 ? (
          <ul>
            {queue.map((item, index) => (
              <span key={index}>{item}&nbsp; &nbsp;</span>
            ))}
          </ul>
        ) : (
          <p>Queue is empty</p>
        )}
      </div>
    </div>
  );
};

export default QueueReactApp;
