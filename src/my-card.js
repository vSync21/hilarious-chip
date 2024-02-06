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
    this.image = "Image here";
    this.paragraph = "Paragraph here";
    this.link = "Link here";
    this.color = "color of card";
    
  }



  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }

      .heading {
        color: red;
        font-size: 32px;

      }
      
      img{
      height: 280px;
      width: 300px;
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
  
  

  
  
  
  
  a {
    text-decoration: none;
  }
      

      
    `;

  }

  render() {
    return html`
    <div id = "wholecard">
      <div class = "card" style="background-color: ${this.color};">
        <h3 class = "heading">${this.title}</h3>
        <img src="${this.image}" class="img-pod">
        <p class = "paragraph">${this.paragraph}</p>
        <a href = "${this.link}"><button class = "button">Details</button></a>
  </div>

      
   
  </div>
  </div>
    
    `;

    
    
  }

  static get properties() {
    return {
      title: { type: String },
      image: {type: String},
      paragraph: {type: String},
      link: {type: String},
      color: {type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
