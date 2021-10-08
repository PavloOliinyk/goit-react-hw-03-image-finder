const API_KEY = '22797563-ef7ac6a65cc3c0715a95e250f';
const BASE_URL = 'https://pixabay.com/api';

class ImageApi {
  // page = null;
  // searchQuery = '';

  // set query(value) {
  //   this.searchQuery = value;
  // }

  // set currentPage(currentPage) {
  //   this.page = currentPage;
  // }

  async fetchImageOrPhoto(searchQuery, page) {
    const res = await fetch(
      `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );
    const { hits, totalHits } = await res.json();
    return { hits, totalHits };
  }
}

export default ImageApi;
