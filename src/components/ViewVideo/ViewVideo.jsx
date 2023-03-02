import styles from "./ViewVideo.module.css";

export default function ViewVideo({ video }) {
  return (
    <section className={styles.container}>
      <div className={styles.frame_box}>
        <iframe
          id="ytplayer"
          type="text/html"
          src={`https://www.youtube.com/embed/${video.id}`} //?autoplay=1
          height="100%"
          width="100%"
          frameBorder="0"
          className={styles.iframe}
        ></iframe>
      </div>
      <div className={styles.box}>
        <p className={styles.title}>{video.snippet.title}</p>
        <strong className={styles.channelTitle}>
          [{video.snippet.channelTitle}]
        </strong>
        <p className={styles.desc}>{video.snippet.description}</p>
      </div>
    </section>
  );
}
