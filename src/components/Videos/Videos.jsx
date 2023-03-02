import Video from "../Video/Video";
import styles from "./Videos.module.css";

export default function Videos({ videos, onWatch }) {
  return (
    <ul className={styles.list}>
      {videos.map((v) => (
        <Video key={v.id} video={v} onWatch={onWatch} />
      ))}
    </ul>
  );
}
