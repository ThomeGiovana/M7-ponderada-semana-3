"use client";
import React, { useState } from "react";
import { DEFAULT_URL } from "../consts";

export default function SongsForm() {
  const [name, setName] = useState("");
  const [authorId, setAuthorId] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Crie um objeto com os dados do formulário
    const formData = {
      name: name,
      authorId: parseInt(authorId),
    };

    try {
      // Envie a solicitação POST para o servidor
      const response = await fetch(DEFAULT_URL + "songs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // A solicitação foi bem-sucedida, faça algo com a resposta, se necessário
        window.location.href = "/";
      } else {
        // A solicitação falhou, faça algo com o erro, se necessário
        console.error("Post request failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="/songs">
        <div>
          <label className="text-sm font-bold" htmlFor="name">
            Nome:
          </label>
          <input
            className="text-gray-700 text-sm font-bold"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-bold" htmlFor="authorId">
            ID do Autor:
          </label>
          <input
            className="text-gray-700 text-sm font-bold"
            id="authorId"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm font-bold"
        >
          Enviar
        </button>
      </form>
    </>
  );
}
