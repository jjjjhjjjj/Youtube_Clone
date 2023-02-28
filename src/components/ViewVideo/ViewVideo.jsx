export default function ViewVideo({ video }) {
  return (
    <section>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${video.id}`} //?autoplay=1
        frameBorder="0"
      ></iframe>
      <div>
        <p>{video.snippet.title}</p>
        <strong>{video.snippet.channelTitle}</strong>
        <p>{video.snippet.description}</p>
      </div>
    </section>
  );
}
