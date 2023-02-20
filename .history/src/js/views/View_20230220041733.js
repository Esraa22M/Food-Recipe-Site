export default class View {
  _parentElement = document.querySelector('.recipe');
  _data;
  _errorMessage = 'This recipe is not available please try another one';
  _successMessage = '';
  render(data) {
    this._data = data;
    this._clear();
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      this._generateMarkup()
    );
  }
  _clear() {
    this._parentElement.innerHTML = ``;
  }
  renderSpinner() {
    const markup = `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  /* error handling */
  renderError(message = this._errorMessage) {
    const markup = ` 
    <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>;
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderSucessMessage(message = this._successMessage) {
    let markup = `<div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${this._successMessage}</p>
        `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
