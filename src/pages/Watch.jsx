import { useLoaderData, useNavigate } from "react-router-dom";
import Videos from "../components/Videos/Videos";
import ViewVideo from "../components/ViewVideo/ViewVideo";
import { getDataFromYoutubeAPIs, RELATED, VIDEO } from "../service/youtube";

export async function loader({ params }) {
  const videoId = params.v;

  const video = await getDataFromYoutubeAPIs(VIDEO, { videoId });
  const { videos } = await getDataFromYoutubeAPIs(RELATED, { videoId });

  return { video, videos };
}

export default function Watch() {
  const { video, videos } = useLoaderData();

  const navigate = useNavigate();

  const handleWatchVideo = (videoId) => {
    navigate(`/Watch/${videoId}`, { replace: true });
    window.scrollTo(0, 0);
  };

  return (
    <section className="video__container">
      <div className="video__view">
        <ViewVideo video={video} />
      </div>
      <div className="video__list-related">
        <Videos videos={videos} onWatch={handleWatchVideo} />
      </div>
    </section>
  );
}
