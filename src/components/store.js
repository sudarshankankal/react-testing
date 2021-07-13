import React, { useState } from "react";

export const Store = React.createContext();

export const StoreProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);
  const [postIds, setPostId] = useState([]);

  return (
    <Store.Provider value={{ postList, setPostList, postIds, setPostId }}>
      {children}
    </Store.Provider>
  );
};
