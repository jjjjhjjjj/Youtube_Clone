import Video from "../Video/Video";

export default function Videos({ videos, onView }) {
  return (
    <ul>
      {videos.map((v) => (
        <Video key={v.id} video={v} onView={onView} />
      ))}
    </ul>
  );
}
