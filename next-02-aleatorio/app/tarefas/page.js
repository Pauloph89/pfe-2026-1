"use client";

import { useState } from "react";

export default function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  async function handleCarregarTarefas() {
    const response = await fetch(
      "https://parseapi.back4app.com/classes/Tarefa",
      {
        headers: {
          "X-Parse-Application-Id": "JYknWGUo6qYhDc3g8hvgQUvITZyz4KFAUttpAxVF",
          "X-Parse-REST-API-Key": "uyhRDxFMCkxfy4hBJavBNlu48oSRdLEmxxZGrog4",
        },
      },
    );
    const data = await response.json();
    setTarefas(data.results ?? []);
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <hr />
      <button onClick={handleCarregarTarefas}>Carregar Tarefas</button>
      <hr />
      <ol>
        {tarefas.map((tarefa) => (
          <li key={tarefa.objectId}>
            {tarefa.descricao} ({`${tarefa.concluida}`})
          </li>
        ))}
      </ol>
    </>
  );
}
