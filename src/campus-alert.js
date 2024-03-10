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
    this.link_text = "text for link";
    this.color = "color of card";
    this.sticky = false;
    this.open = true;
    if(localStorage.getItem('campus-alert-opened-state') == 'true') {
      this.open = true;
    }
    else {
      this.open = false;
    }
    this.date = 'date';
  }

  static get styles() {
    return css`

:host([sticky]) .wholealert {
        position: sticky;
        top: 0;
        z-index: 1000;
      }

      
      :host([status="alert"]) {
            --bgcolor: red;
        }

     
 
        :host([status="warning"]) {
            --bgcolor: yellow;
        }

        :host([status="notice"]) {
            --bgcolor: blue;
        }

        :host([status="crazy"]) {
            --bgcolor: green;
        }
 
 
        .wholealert {
          background-color: var(--bgcolor);
          height: 100%;
        }   

.alert {
    font-style: italic;
    font-style: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10x;
    margin: 0px;
}

.content {
    font-style: italic;
    font-style: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.image {
    width: 64px; 
    height: auto; 
    margin-right: auto; 
}

.paragraph {
    margin: 0;
    text-align: center;
}

.date {
  font-style: bold;
  margin-left: auto;
}

.link {
  font-style: bold;
}



    `;
  }

  render() {
    return html`
    <div class = "wholealert" ?sticky="${this.sticky}">
      <div class = "alert" style="background-color: ${this.color};">
        <h3 class = "heading">${this.title}</h3>
        ${this.open ? html`
        <div class = 'content'>
        <img class= 'image' src = "${this.image}">
        <p class = "paragraph">${this.paragraph}</p>
        <slot></slot>
        </div>
        <a href = "${this.link}"><p class = 'link-text'>${this.link_text}</p></a>
        `: ''}
        <div class = "date">${this.date}</div>
        <button @click="${this.toggleVisibility}">${this.open ? 'Minimize contents' : 'Show Contents'}</button>

  </div>
        
        
    </div>
    `;
  }


  toggleVisibility(){
    this.open = !this.open;
    localStorage.setItem('campus-alert-opened-state', this.open);
  }

  static get properties() {
    return {
      title: { type: String },
      paragraph: { type: String },
      link: { type: String },
      image: {type: String},
      link_text: {type: String},
      color: { type: String },
      sticky: {type: Boolean, reflect: true},
      open: {type: Boolean, reflect: false},
      date: {type: String},
    };
  }

  
}



globalThis.customElements.define(CampusAlert.tag, CampusAlert);
