import React, { createContext, useState } from "react";
import { getImages } from "../api/pexels";

export const ImageContext = createContext();

const ImageContextProvider = (props) => {
  const [data, setData] = useState([]);

  const loadImages = async (searchTerm, perPage) => {
    const res = await getImages(searchTerm, perPage);
    setData(res.data);
  };

  return (
    <ImageContext.Provider value={{ data, loadImages }}>
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;
