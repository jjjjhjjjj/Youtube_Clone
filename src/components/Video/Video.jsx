export default function Video({ video }) {
  return (
    <li>
      <img src={video.snippet.thumbnails.high.url} alt="" />
      <p>{video.snippet.title}</p>
      <p>{video.snippet.channelTitle}</p>
      <p>{video.snippet.publishedAt}</p>
    </li>
  );
}
