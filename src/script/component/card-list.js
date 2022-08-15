import './card-item.js';

class CardList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set cards(cards) {
    this._cards = cards;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._cards.forEach(card => {
      const cardItemElement = document.createElement('card-item');
      cardItemElement.card = card;
      this.shadowDOM.appendChild(cardItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('card-list', CardList);
