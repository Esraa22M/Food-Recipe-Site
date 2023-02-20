class SearchView {
  _parentElement = document.querySelector('.search');
  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearSearchInput();
    return query;
  }
  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
  _clearSearchInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
}
export default new SearchView();
