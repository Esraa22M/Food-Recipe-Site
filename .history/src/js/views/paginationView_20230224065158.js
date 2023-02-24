import View from './View';
import icons from '../../img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _errorMessage = 'No recipes found for this query';
  /* handle prev and next button clicks using event delegation */
  addClickHandler(handler) {
    this._parentElement.addEventListener('click', e => {
      const button = e.target.closest('.btn--inline');
      if (!button) return;
      const gotoPage = +button.dataset.goto;
      handler();
    });
  }
  _successMessage = '';
  #nextButton() {
    const { currentPage } = this._data;
    return `<button class="btn--inline pagination__btn--next" data-goto="${
      currentPage + 1
    }">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
  }
  #prevButton() {
    const { currentPage } = this._data;

    return `<button class="btn--inline pagination__btn--prev"data-goto="${
      currentPage - 1
    }">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
         `;
  }
  _generateMarkup() {
    const { currentPage, resultsPerPage, searchResults } = this._data;
    const numberOfPages = Math.ceil(searchResults.length / resultsPerPage);
    console.log(numberOfPages);
    //we have one page and there is other pages
    if (currentPage === 1 && numberOfPages > 1) {
      return this.#nextButton();
    }
    // last page
    if (currentPage === numberOfPages && numberOfPages > 1) {
      return this.#prevButton();
    }

    // other than number 1 page
    if (currentPage < numberOfPages) {
      return `
         ${this.#prevButton()}
          ${this.#nextButton()}
          `;
    }
    //we have 1 page and ther is no other pages
    return ``;
  }
}
export default new PaginationView();
