class SearchView {
  #parentElement = document.querySelector('.search');
  getQuery() {
    return this.#parentElement.querySelector('.search__field').value;
  }
  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
  clearSearchInput() {
    this.#parentElement.querySelector('.search__field').value = '';
  }
}
export default new SearchView();
