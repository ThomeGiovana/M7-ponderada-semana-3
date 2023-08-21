const axios = require("axios");
import { DEFAULT_URL } from "../consts";
import SongsForm from "./songs-form";
import SongsList from "./songs-list";

const URL = DEFAULT_URL + "songs";

export default function Songs() {
  return (
    <>
      <h1 className="text-sm font-bold">Songs</h1>
      <SongsList />
      <h1 className="text-sm font-bold">Adicionar nova música:</h1>
      <SongsForm />
    </>
  );
}
