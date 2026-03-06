"use client";

import { useState } from "react";

export default function Contador() {
  const [valor, setValor] = useState(0);
  const handleClick = () => {
    setValor(valor + 1);
  };
  return (
    <>
      <h3>Quantidade de clicks: {valor}</h3>
      <button onClick={handleClick}>Clique aqui</button>
    </>
  );
}
