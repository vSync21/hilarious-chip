import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

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
    this.image = "Image here";
    this.paragraph = "Paragraph here";
    this.link = "Link here";
    this.color = "color of card";
    this.fancy = false;

  }



  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      :host([fancy]) {
      width: 600px;
      display: block;
      background-color: pink;
      border: 2px solid fuchsia;
      box-shadow: 10px 5px 5px red;
}

      .heading {
        color: red;
        font-size: 32px;

      }
      
      .img-pod{
      height: 280px;
      width: 300px;
    }

    details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open]  summary{

    font-weight: bold;
  }
  
  details div {

    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }

    p {

      color: red;
      font-weight: bold;
      padding: 0px 0px 8px 0;

    }


    @media screen and (min-width: 500px) and (max-width: 800px){
    button, img {
      display: block;
    }
  }
  
  @media screen and (max-width: 500px) {
    #wholecard {
      max-width: 100%;
    }
  }
  :root, html, body {
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 30px; 
    --basic-color: #ff6500;
  }

  
  
  .change-color {
    background-color: red;
    
  }

 
  .card {
    align-items: center;
    font-size: 16px;
    display: inline-flex;
    border: 16px solid black;
    padding: 8px;
    margin: 8px;
    background-color: lightblue;
    flex-direction: column;
    width: 90%;
  }

  
  
  
  
  button {
    align-items: center;
    width:300px;
    max-width: 100%;
    padding-top: 8px;
    margin-top: -16px;
    margin-bottom: 8px;
    color: white;
    transition: all 0.4% linear;
    font-size: 32px;
    background-color: red;
    border: lightblue;
    margin: center;
  }

  button:hover{
    background-color: orange;
  }
  
  details{
    padding: 16px;
  }

  
  
  
  
  a {
    text-decoration: none;
  }
      

      
    `;

  }


  openChanged(e) {
    console.log(e);
    if (e.target.getAttribute('open') !== null) {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div id = "wholecard">
      <div class = "card" style="background-color: ${this.color};">
        <h3 class = "heading">${this.title}</h3>
        <meme-maker class = 'img-pod' top text = "${this.title}" image-url = "${this.image}" bottom-text = "lol" top-text = "haha">
          </meme-maker>
        <p class = "paragraph">${this.paragraph}</p>
        <details ?open="${this.fancy}">
          <summary>Description</summary>
            <slot>${this.description}</slot>
        </details>
        <a href = "${this.link}"><button class = "button">Details</button></a>
        
  </div>
  
      
   
  </div>
  </div>
    
    `;



  }


  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      paragraph: { type: String },
      link: { type: String },
      color: { type: String },
      fancy: { type: Boolean, reflect: true },

    };
  }
}



globalThis.customElements.define(MyCard.tag, MyCard);
