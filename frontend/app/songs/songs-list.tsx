async function getSongs() {
  const res = await fetch("http://localhost:3000/songs");

  return res.json();
}

export default async function SongsList() {
  const songs = await getSongs();

  return (
    <>
      {songs.map((song: any) => (
        <p key={song.id} className="text-sm font-bold">
          - {song.name}
        </p>
      ))}
      {songs.length === 0 && <p>Não há músicas registradas!</p>}
    </>
  );
}
