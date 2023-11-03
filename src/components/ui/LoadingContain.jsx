import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
export const LoadingContain = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  //TODO: ARREGLAR ESTE LOADER QUE NO CARGA
  return (
    <>
      <div className={"loader"}>
        <Image src={"/logo/tagtical.svg"} width={"100px"} />
      </div>
    </>
  );
};
