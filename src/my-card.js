import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "the POD CARD";
    this.src = "https://i.postimg.cc/cCkpvY73/7bd23ffa9c82eb5d82cbb6335ba20d69.jpg";
    this.pargraph = "The image above is a picture of a man sleeping in a napping pod from the future. Hopefully someday we all can have our own napping pod.";
    this.button = "Details";
  }



  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      

      
    `;

  }

  render() {
    return html`<div>${this.title}</div>`;
    
  }

  static get properties() {
    return {
      title: { type: String },
      src: {type: Image},
      pargraph: {type: String},
      button: {type: String},

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
