import { useState, useEffect } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    //API Call
    const timer = setInterval(() => {
      console.log("React OP");
    }, 1000);
    console.log("useEffect");
    return () => {
      clearInterval(timer);
      console.log("useEffect return OR Component Will Unmount");
    };
  }, []);

  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease Count
      </button>
      <h1>Count2 : {count2}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Bangalore</h3>
      <h3>Contact: 707</h3>
    </div>
  );
};

export default User;
