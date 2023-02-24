import View from './View';
import icons from '../../img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _errorMessage = 'No recipes found for this query';

  _successMessage = '';
  _generateMarkup() {
    const { currentPage, resultsPerPage, searchResults } = this._data;
    const numberOfPages = Math.ceil(searchResults.length / resultsPerPage);
    console.log(numberOfPages);
    //we have one page and there is other pages
    if (currentPage === 1 && numberOfPages > 1) {
      return 'page1 and others';
    }
    //we have 1 page and ther is no other pages
    // last page
    if (currentPage === numberOfPages) {
      return 'this is the last page';
    }
    // other than number 1 page
    if (currentPage < numberOfPages) {
      return 'in between page';
    }
  }
}
export default new PaginationView();
