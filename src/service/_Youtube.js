class Youtube {
  constructor(baseUrl, key) {
    this.#baseUrl = baseUrl;
    this.#key = key;
  }

  async mostPopular() {
    const query =
      "/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr";
    const videos = await this.#fetchVideos(query);
    return { videos };
  }

  async search(search) {
    return fetch(
      `${this.baseUrl}/search?key=${this.key}&part=snippet&q=${search}&maxResults=30`
    )
      .then((res) => res.json())
      .then((data) =>
        data.items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
      );
  }

  async related(video) {
    return fetch(
      `${this.baseUrl}/search?key=${this.key}&part=snippet&relatedToVideoId=${video.id}&type=video&maxResults=30`
    )
      .then((res) => res.json())
      .then((data) =>
        data.items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
      );
  }

  async #fetchVideos(query) {
    return fetch(`${this.baseUrl}${query}`)
      .then((res) => res.json())
      .then((res) => res.items);
  }
}
