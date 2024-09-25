import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { atomInputData } from "@/atom";

const Input = ({ label, id, type, placeholder }) => {
  const [inputData, setInputData] = useAtom(atomInputData);

  return (
    <div>
      <label>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setInputData({ ...inputData, [id]: e.target.value })}
      />
    </div>
  );
};

export default Input;
