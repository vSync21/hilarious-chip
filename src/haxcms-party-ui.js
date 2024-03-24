import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/multiple-choice/lib/confetti-container.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class Project1 extends LitElement {

    static get tag() {
        return 'haxcms-party-ui';
    }

    constructor() {
        super();
        this.title = "Project 1";
        this.color = "color";
        this.open = true;
        this.button = "button"
        if(localStorage.getItem('haxcms-party-ui') == 'true') {
            this.open = true;
          }
          else {
            this.open = false;
          }
          this.date = 'date';

    }
    



    static get styles() {
        return css`

    :host {
  display: flex;
  justify-content: center;
  align-items: center; 
  border: 0px solid black; 
  box-shadow: 0; 
    }

    .wholething {
        margin: 20px;
    }

    .heading {
        justify-content: center;
        color: red;
        display: flex;
        font-size: 32px;
        flex: 0; 
        display: flex;
        align-items: center; 

      }

      .background {
        padding: 20px;
        background-color: lightblue;
        border: 2px solid black;
        border-radius: 10px; 

    }




.toggle-button {
  background-color: white;
  font-weight: bold;
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0px 16px;
  margin-left: 400px; 
}

.toggle-button:hover {
  background-color: red;
}

.toggle-button:focus {
  background-color: yellow;
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

   
    
      toggleVisibility(){
        this.open = !this.open;
        localStorage.setItem('haxcms-party-ui-opened-state', this.open);
      }

      addRPGCharacter() {
        import("@lrnwebcomponents/rpg-character/rpg-character.js").then(module => {
            const rpgCharacter = document.createElement('rpg-character');
            this.shadowRoot.querySelector('.background').appendChild(rpgCharacter);
        });
    }


    deleteRPGCharacters() {
      const rpgCharacters = this.shadowRoot.querySelectorAll('rpg-character');
      rpgCharacters.forEach(character => character.remove()
    );
  }
    

      



      
    


    render() {
        return html`
    <div id = "wholething">
        <div class = "background" style="background-color: ${this.color};">
        <button @click="${this.toggleVisibility}">${this.open ? '...' : '...'}</button>
        <h3 class = "heading">${this.title}</h3>
        ${this.open ? html`
        <div class = "button">
        <button @click="${this.addRPGCharacter}">Add User</button>
        <button @click="${this.makeItRain}">Save Members Party</button>
        <button @click="${this.deleteRPGCharacters}">Delete</button>
        </div>
        `: ''}
      </div>
     </div>
    </div>

    `;

    }


    static get properties() {
        return {

            title: { type: String },
            color: { type: String },
            open: {type: Boolean, reflect: false},
        };
    }
}

globalThis.customElements.define(Project1.tag, Project1);

