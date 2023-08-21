const axios = require("axios");
import { DEFAULT_URL } from "./consts";
import SongsList from "./songs-list";

const URL = DEFAULT_URL + "songs";

export default function Home() {
  return (
    <>
      <h1 className="text-sm font-bold">Songs</h1>
      <SongsList />
      <h1 className="text-sm font-bold">
        <a className="hover:underline" href="/songs-add">
          Adicionar nova música
        </a>
      </h1>
    </>
  );
}
