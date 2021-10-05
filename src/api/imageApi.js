const API_KEY = "22797563-ef7ac6a65cc3c0715a95e250f";
const BASE_URL = "https://pixabay.com/api";

class ImageApi {
  page = 1;
  searchQuery = "";

  incrementpage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  set query(value) {
    this.searchQuery = value;
  }

  async fetchImageOrPhoto() {
    const res = await fetch(
      `${BASE_URL}/?q=${this.searchQuery}&page=${this.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const { hits } = await res.json();
    return hits;
  }
}

export default ImageApi;
