import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex px-2 py-1">
      <Button name="All" />
      <Button name="News"/>
      <Button name="Live"/>
      <Button name="Gaming "/>
      <Button name="Cricket"/>
      <Button name="Songs"/>
    </div>
  );
};

export default ButtonList;
