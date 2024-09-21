import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { atomInputData } from "@/atom";

const Input = ({ label, id, type }) => {
  const [inputData, setInputData] = useAtom(atomInputData);

  return (
    <div>
      <br />
      <label>{label}</label>
      <br />
      <input
        id={id}
        type={type}
        onChange={(e) => setInputData({ ...inputData, [id]: e.target.value })}
        className="border border-black"
      />
    </div>
  );
};

export default Input;
