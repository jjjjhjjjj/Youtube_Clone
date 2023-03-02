import styles from "./Video.module.css";

export default function Video({ video, onWatch }) {
  const handleClick = () => {
    onWatch(video.id);
  };

  return (
    <li className={styles.video} onClick={handleClick}>
      <img
        src={video.snippet.thumbnails.high.url}
        className={styles.img}
        alt=""
      />
      <div>
        <p className={styles.title}>{video.snippet.title}</p>
        <p className={styles.channelTitle}>{video.snippet.channelTitle}</p>
        <p className={styles.date}>{video.snippet.publishedAt}</p>
      </div>
    </li>
  );
}
