import { DEFAULT_URL } from "./consts";

export default async function SongsList() {
  const data = await fetch(DEFAULT_URL + "songs", { cache: "no-store" });
  const songs = await data.json();

  const tableLinesClass = "px-5";

  return (
    <>
      <table className="table-auto border-spacing-px">
        <tr>
          <th className={tableLinesClass}>Nome da música</th>
          <th className={tableLinesClass}>Id</th>
          <th className={tableLinesClass}>Id do aritsta</th>
          <th className={tableLinesClass}>Data de criação</th>
        </tr>

        {songs.map((song: any) => {
          return (
            <>
              <tr key={song.id}>
                <td className={tableLinesClass}>{song.name}</td>
                <td className={tableLinesClass}>{song.id}</td>
                <td className={tableLinesClass}>{song.authorId}</td>
                <td className={tableLinesClass}>{song.createdAt}</td>
              </tr>
            </>
          );
        })}
        {songs.length === 0 && <p>Não há músicas registradas!</p>}
      </table>
    </>
  );
}
