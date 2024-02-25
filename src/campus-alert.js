import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class CampusAlert extends LitElement {

  static get tag() {
    return 'campus-alert';
  }

  constructor() {
    super();
    this.title = "campus alert";
    this.paragraph = "Paragraph here";
    this.image = 'img here';
    this.link = "Link here";
    this.link_text = "text for link"
    this.color = "color of card";
  }

  static get styles() {
    return css`

.alert {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px;
}

.content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.image {
    width: 32px; 
    height: auto; 
    margin-right: 18px; 
}

.paragraph {
    margin: 0;
}



    `;
  }

  render() {
    return html`
    <div id = "wholealert">
      <div class = "alert" style="background-color: ${this.color};">
        <h3 class = "heading">${this.title}</h3>
        <div class = 'content'>
        <img class= 'image' src = "${this.image}">
        <p class = "paragraph">${this.paragraph}&nbsp;</p>
        <a href = "${this.link}"><p class = 'link-text'>${this.link_text}</p></a>
        </div>

  </div>
        
        
    </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      paragraph: { type: String },
      link: { type: String },
      image: {type: String},
      link_text: {type: String},
      color: { type: String },
    };
  }
}



globalThis.customElements.define(CampusAlert.tag, CampusAlert);
