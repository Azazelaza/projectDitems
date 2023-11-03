import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startUploadImage } from "../../redux/expediente/thunk";

export default function ImageField({ divID = "label" }) {
  const { uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const uploadFile = (e) => {
    dispatch(startUploadImage(e.target.files[0], uid));
  };

  return (
    <>
      <label htmlFor={divID} className="uploadImage">
        <div>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width={80}
            height={80}
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
        </div>
        <div>Subir Archivo</div>
      </label>
      <input
        type="file"
        onChange={uploadFile}
        className="invisible"
        id={divID}
      />
    </>
  );
}
