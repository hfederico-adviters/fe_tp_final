import React from "react";
import image from "../../images/user/defaultimg.png";
import { Box, Button } from "@mui/material";
const File = ({ input: { value, onChange, onBlur } }) => {
  var reader = new FileReader();
  if (value) {
    reader.onload = function () {
      var output = document.getElementById("output");
      output.src = reader.result;
    };
    reader.readAsDataURL(value);
  }

  // if(img !== image){
  //   <style>

  //   </style>
  // }

  return (
    <>
      <Button for="text">
        <label for="text" style={{ cursor: "pointer" }}>
          {value ? "Cambiar imagen" : "Cargar imagen"}
          <img id="output" src={image} style={{ width: "7rem" }} />
        </label>
      </Button>
      <input
        id="text"
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        onChange={(evt) => onChange(evt.target.files[0])}
      />
    </>
  );
};

export default File;
