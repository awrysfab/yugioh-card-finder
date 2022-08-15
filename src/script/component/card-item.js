class CardItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set card(card) {
    this._card = card;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        .grid-container {
          display: grid;
          grid-template-columns: 20% auto;
          background-color: #fff;
        }
        .grid-item {
          padding: 20px;
          text-align: left;
        }
        .fan-art-card {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
          background-color: #FFC069;
        }
        .card-info {
          padding: 24px;
        }
        .card-info > p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      <div class="grid-container">
        <img class="fan-art-card grid-item" src="${this._card.card_images[0].image_url}" alt="Fan Art" onclick={window.open("https://www.w3schools.com");}>
        <div class="card-info grid-item">
          <p><b>${this._card.name}</b></p>
          <p>${this._card.desc}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('card-item', CardItem);
