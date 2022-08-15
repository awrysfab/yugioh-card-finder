class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
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
            width: 100%;
            background-color: #4A403A;
            color: white;
            box-shadow: 0.4x 8x 0 rgba(0, 0, 0, 0.2);
        }
        h1 {
          text-align: center;
            padding: 16px;
        }
        </style>

        <h1>Yu-Gi-Oh! Card Finder</h1>
        `;
  }
}

customElements.define('app-bar', AppBar);