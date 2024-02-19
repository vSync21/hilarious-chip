import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/multiple-choice/lib/confetti-container.js";


/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class counterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }

  constructor() {
    super();
    this.title = 0;
    this.button = "button"
    this.min = 0;
    this.max = 100;


  }



  static get styles() {
    return css`

   
    

html,
body {
    height: 100%;
}


.container {
    display: flex;
    align-items: center;

}

.body{
    background: grey;
    padding: 16px;
    border-radius: 8px;
    border-color: black;
    text-align: center;
}

.body h1{
    margin-bottom: 16px;
    font-size: 64px;

}

.button {
    color: black;
    padding: 16px 48px;
    border: 0;
    font-size: 16px;
    font-weight: bold;
    margin: 0 5px;
}

button{
  background-color: white;
}

button:hover {
  background-color: red;
}


button:focus {
  background-color: yellow;
  
}

button:disabled {
  background-color: grey;
  cursor: not-allowed;
}



      
    `;

  }


  updated(changedProperties) {
    if (changedProperties.has('title')) {
      if (this.title === 21){
        this.makeItRain();

      }
    }
  }

  makeItRain() {
    // this is called a dynamic import. It means it won't import the code for confetti until this method is called
    // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
    // will only run AFTER the code is imported and available to us
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        // This is a minor timing 'hack'. We know the code library above will import prior to this running
        // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
        // this "hack" ensures the element has had time to process in the DOM so that when we set popped
        // it's listening for changes so it can react
        setTimeout(() => {
          // forcibly set the poppped attribute on something with id confetti
          // while I've said in general NOT to do this, the confetti container element will reset this
          // after the animation runs so it's a simple way to generate the effect over and over again
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }
  


  increase() {
    this.title++;
    this.checkColor();
  }
  

  checkColor(){
    if (this.title === 18) {
      this.style.setProperty('color', 'purple')
    } else if(this.title === 21) {
      this.style.setProperty('color', 'blue')
    }
     else {
      this.style.setProperty('color', 'black')
    }
  }

  decrease() {
    this.title--;
    this.checkColor();
  }






  render() {
    return html`
<confetti-container id="confetti">
<div class = 'container'>
    <div class = 'body'>
      <h1 id = "title">${this.title}</h1>
      <div class = "button">
        <button @click=${this.increase} ?disabled="${this.title >= this.max}">+</button>
        <button @click=${this.decrease} ?disabled="${this.title <= this.min}">-</button>
        </div>
      </div>
    </div>

    </confetti-container>
 
    
    `;



  }


  static get properties() {
    return {

      title: { type: Number, reflect: true },
      min: { type: Number },
      max: { type: Number },


    };
  }
}



globalThis.customElements.define(counterApp.tag, counterApp);




