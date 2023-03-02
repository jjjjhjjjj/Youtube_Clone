import { useLoaderData, useNavigate } from "react-router-dom";
import Videos from "../components/Videos/Videos";
import {
  getDataFromYoutubeAPIs,
  MOST_POPULAR,
  SEARCH,
} from "../service/youtube";

export async function loader({ params }) {
  const search = params.search;
  let videos = [];

  if (search) {
    videos = await getDataFromYoutubeAPIs(SEARCH, { search });
  } else {
    videos = await getDataFromYoutubeAPIs(MOST_POPULAR);
  }

  return videos;
}

export default function Results() {
  const { videos } = useLoaderData();
  const navigate = useNavigate();

  const handleWatchVideo = (videoId) => {
    navigate(`/Watch/${videoId}`);
  };

  return <>{videos && <Videos videos={videos} onWatch={handleWatchVideo} />}</>;
}
