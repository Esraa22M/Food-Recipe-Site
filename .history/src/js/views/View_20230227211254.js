import icons from '../../img/icons.svg';

export default class View {
  _data;
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;

    this._clear();
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      this._generateMarkup()
    );
  }
  update(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const newMarkup = this._generateMarkup();
    /* Dom object that does not live in the dom but it lives in the memory */
    const newDomObject = document
      .createRange()
      .createContextualFragment(newMarkup);
    const newElements = newDomObject.querySelectorAll('*');
    console.log(newElements);
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
  updateServingsHandler(handler) {
    this._parentElement.addEventListener('click', e => {
      const button = e.target.closest('.btn--update-servings');
      if (!button) return;
      console.log(button);
      const newServings = +button.dataset.servingsTo;
      console.log(newServings);
      if (newServings > 0) handler(newServings);
    });
  }
}
