import Video from "../Video/Video";

export default function Videos({ videos, onWatch }) {
  return (
    <ul>
      {videos.map((v) => (
        <Video key={v.id} video={v} onWatch={onWatch} />
      ))}
    </ul>
  );
}
