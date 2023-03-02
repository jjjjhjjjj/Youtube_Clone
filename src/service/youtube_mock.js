const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export async function getMostPopular() {
  const type = "videos";
  const query = "&chart=mostPopular&regionCode=kr";

  const videos = await fetchVideos(type, query);
  return { videos };
}

export async function getSearch(search) {
  const type = "videos";
  const query = "&chart=mostPopular&regionCode=kr";

  const videos = await fetchVideos2(type, query);
  return { videos };
}

export async function getVideo(videoId) {
  const video = {
    kind: "youtube#searchResult",
    etag: "X2uiK2a3_xY7bTZqvzc4wZhue1U",
    id: "mWVP-mfpZCU",

    snippet: {
      publishedAt: "2023-01-17T11:06:45Z",
      channelId: "UCeXxAet11DPbC8pG-lBOUTQ",
      title: "집사한테 말대꾸 좀 치는 강아지 (말 많음 주의)",
      description:
        "아휴 수다스러워 ▷웰시코기 아리 프로필 성별: 공주님 나이: 2016년생 취미: -어려운 문제 해결 -24시간 집사 감시 특징: -가끔 천재견 ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/mWVP-mfpZCU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/mWVP-mfpZCU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/mWVP-mfpZCU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "아리둥절 Ari the Corgi",
      liveBroadcastContent: "none",
      publishTime: "2023-01-17T11:06:45Z",
    },
  };
  return video;
}

export async function getRelated(videoId) {
  const type = "videos";
  const query = "&chart=mostPopular&regionCode=kr";

  const videos = await fetchVideos(type, query);
  return { videos };
}

async function fetchVideos(type, query) {
  // return fetch(
  //   `${BASE_URL}/${type}?key=${API_KEY}&part=snippet&maxResults=30${query}`
  // )
  return fetch("/data/mostPopular.json")
    .then((res) => res.json())
    .then((res) => res.items)
    .then((res) =>
      res.map((res) => {
        return { ...res, id: res.id.videoId ? res.id.videoId : res.id };
      })
    );
}

async function fetchVideos2(type, query) {
  // return fetch(
  //   `${BASE_URL}/${type}?key=${API_KEY}&part=snippet&maxResults=30${query}`
  // )
  return fetch("/data/search.json")
    .then((res) => res.json())
    .then((res) => res.items)
    .then((res) =>
      res.map((res) => {
        return { ...res, id: res.id.videoId ? res.id.videoId : res.id };
      })
    );
}
