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
  }

  static get styles() {
    return css`
      :host {
        display: inline flex;
      }
    `;
  }

  render() {
    return html`<div>${this.title}</div>`;
    
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
