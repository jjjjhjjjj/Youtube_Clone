import Video from "../Video/Video";

export default function Videos({ videos }) {
  return (
    <ul>
      {videos.map((v) => (
        <Video key={v.id} video={v} />
      ))}
    </ul>
  );
}
