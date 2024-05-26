import React, { useEffect, useState } from "react";

const useLocalStorage = (keyname, initialValue) => {
  const [localStroageMessage, setLocalStroageMessage] = useState(
    localStorage.getItem(keyname) || initialValue
  );
  const removeItem = () => {
    localStorage.removeItem(keyname);
  };
  useEffect(() => {
    localStorage.setItem(keyname, localStroageMessage);
  }, [localStroageMessage]);

  // useEffect(() => {
  //   localStorage.setItem(keyname, initialValue);
  // }, []);

  return [localStroageMessage, setLocalStroageMessage, removeItem];
};

export default useLocalStorage;
