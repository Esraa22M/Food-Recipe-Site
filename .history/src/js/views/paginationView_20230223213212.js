import View from './View';
import icons from '../../img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for this query';

  _successMessage = '';
}
