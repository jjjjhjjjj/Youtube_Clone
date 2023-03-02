import { useLoaderData } from "react-router-dom";
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

  return (
    <>
      <ViewVideo video={video} />
      <Videos videos={videos} />
    </>
  );
}
