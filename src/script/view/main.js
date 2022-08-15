import '../component/card-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const cardListElement = document.querySelector('card-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchCard(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    cardListElement.cards = results;
  };

  const fallbackResult = message => {
    cardListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
