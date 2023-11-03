import React from "react";
import { Image } from "react-bootstrap";

export const Imagecompany = ({ src, ...props }) => {
  return (
    <Image
      src={`/${import.meta.env.VITE_REACT_APPLICATIONID}/${src}`}
      {...props}
    />
  );
};
