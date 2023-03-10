class ButtonCount extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    this.count = 0;
    shadowRoot.innerHTML = `<button>Times Clicked: ${this.count}</button>`;
  }

  connectedCallback() {
    let button = this.shadowRoot.querySelector('button');
    button.addEventListener('click', () => {
      this.count++;
      button.innerText = `Times Clicked: ${this.count}`;
    });
  }
}
customElements.define('button-count', ButtonCount);