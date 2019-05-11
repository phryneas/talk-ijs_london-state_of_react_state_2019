import React from "react";

// example taken from https://kentcdodds.com/blog/how-to-use-react-context-effectively
// please read that excellent blog article for more information!

const CountContext = React.createContext();

function CountProvider(props) {
  const [count, setCount] = React.useState(0);

  const value = React.useMemo(() => {
    return {
      count,

      setCount
    };
  }, [count]);

  return <CountContext.Provider value={value} {...props} />;
}

function useCount() {
  const context = React.useContext(CountContext);

  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }

  const { count, setCount } = context;

  const increment = React.useCallback(() => setCount(c => c + 1), [setCount]);

  return {
    count,
    increment
  };
}

export { CountProvider, useCount };
