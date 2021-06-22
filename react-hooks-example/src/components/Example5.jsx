import React from "react";

export default function Example5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("componentDidMount");
  }, []);

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);

    return () => {
      // cleanup
      console.log("cleanup by count", count);
    };
  }, [count]);

  React.useEffect(() => {
    console.log("componentWillUnMount");

    return () => {
      // cleanup
      // componentWillUnmount
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}
