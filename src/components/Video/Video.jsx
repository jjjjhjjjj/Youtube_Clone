export default function Video({ video, onView }) {
  const handleClick = () => {
    onView(video);
  };

  return (
    <li onClick={handleClick}>
      <img src={video.snippet.thumbnails.high.url} alt="" />
      <p>{video.snippet.title}</p>
      <p>{video.snippet.channelTitle}</p>
      <p>{video.snippet.publishedAt}</p>
    </li>
  );
}
