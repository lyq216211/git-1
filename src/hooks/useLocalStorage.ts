import React, { useEffect, useState } from "react";

const useLocalStorage = (keyname, keyvalue) => {
  const [message, setMessage] = useState(localStorage.getItem(keyname) || "");

  useEffect(() => {
    setMessage((prev) => {
      localStorage.setItem(keyname, keyvalue);
      return prev;
    });
  }, [message]);

  return [message, setMessage, remove];
};

export default useLocalStorage;
