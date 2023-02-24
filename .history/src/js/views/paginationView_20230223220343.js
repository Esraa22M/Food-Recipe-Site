import View from './View';
import icons from '../../img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _errorMessage = 'No recipes found for this query';

  _successMessage = '';
  _generateMarkup() {
    const { currentPage, resultsPerPage, searchResults } = this._data;
    const numberOfPages = Math.ceil(
      this._data.searchResults.length / this._data.resultsPerPage
    );
    console.log(numberOfPages);
    //we have one page and there is other pages
    //we have 1 page and ther is no other pages
    // last page
    // other than number 1 page
  }
}
export default new PaginationView();
