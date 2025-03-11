const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const MOST_POPULAR = "mostPopluar";
export const SEARCH = "search";
export const RELATED = "related";
export const VIDEO = "video";

export async function getDataFromYoutubeAPIs(type, params) {
  let _type = "";
  let _query = "";

  switch (type) {
    case MOST_POPULAR:
      _type = "videos";
      _query = "&chart=mostPopular&regionCode=kr";

      break;
    case SEARCH:
      _type = "search";
      _query = `&q=${params.search}`;

      break;
    case RELATED:
      _type = "search";
      _query = `&relatedToVideoId=${params.videoId}&type=video`;

      break;
    case VIDEO:
      _type = "videos";
      _query = `&id=${params.videoId}`;

      break;
    default: {
    }
  }

  const videos = await fetchVideos(_type, _query);

  if (type === VIDEO) {
    return videos[0];
  }
  return { videos };
}

async function fetchVideos(type, query) {
  console.log(
    `${BASE_URL}/${type}?key=${API_KEY}&part=snippet&maxResults=30${query}`
  );
  return fetch(
    `${BASE_URL}/${type}?key=${API_KEY}&part=snippet&maxResults=30${query}`
  )
    .then((res) => res.json())
    .then((res) => res.items)
    .then((videos) =>
      videos.map((videos) => {
        return {
          ...videos,
          id: videos.id.videoId ? videos.id.videoId : videos.id,
        };
      })
    );
}

// export async function getMostPopular() {
//   const type = "videos";
//   const query = "&chart=mostPopular&regionCode=kr";

//   const videos = await fetchVideos(type, query);
//   return { videos };
// }

// export async function getSearch(search) {
//   const type = "search";
//   const query = `&q=${search}`;

//   const videos = await fetchVideos(type, query);
//   return { videos };
// }

// export async function getRelated(videoId) {
//   const type = "search";
//   const query = `&relatedToVideoId=${videoId}&type=video`;

//   const videos = await fetchVideos(type, query);
//   return { videos };
// }

// export async function getVideo(videoId) {
//   const video = await fetch(
//     `${BASE_URL}/videos?key=${API_KEY}&part=snippet&id=${videoId}`
//   )
//     .then((res) => res.json())
//     .then((res) => res.items[0]);

//   return video;
// }
