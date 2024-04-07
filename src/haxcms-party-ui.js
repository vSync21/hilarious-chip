import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/multiple-choice/lib/confetti-container.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class Project1 extends DDD {

  static get tag() {
    return 'haxcms-party-ui';
  }

  constructor() {
    super();
    this.title = "Project 1";
    this.color = "color";
    this.open = true;
    this.button = "button";
    this.userNames = [];



  }




  static get styles() {
    return css`

    :host {
  display: flex;
  justify-content: center;
  align-items: center; 
  border: 0px var(--ddd-theme-default-potentialMidnight); 
  box-shadow: 0; 
    }

    .wholething {
        margin: 20px;
    }

    .users {
      display: flex;
    }

    .heading {
        justify-content: center;
        color: var(--ddd-theme-default-original87Pink);
        display: flex;
        font-size: 32px;
        flex: 0; 
        display: flex;
        align-items: center; 

      }

      .background {
        padding: 20px;
        background-color: var(--ddd-theme-default-skyBlue);
        border: 2px solid black;
        border-radius: 10px; 
        display: center;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        

    }

   

    button, input{
    margin-bottom: 24px; 
    padding: 10px; 
    border: 1px solid white;
    border-radius: 8px; 
    justify-content: center;
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
  background-color: var(--ddd-theme-default-discoveryCoral);
}

.toggle-button:focus {
  background-color: var(--ddd-theme-default-keystoneYellow);
}

   

    .button {
    color: var(--ddd-theme-default-coalyGray);
    padding: 16px 48px;
    border: 0;
    font-size: 16px;
    font-weight: bold;
    margin: 0 5px;
    }

   
    button{
  background-color: var(--ddd-theme-default-slateMaxLight);
    }

    button:hover {
  background-color: var(--ddd-theme-default-discoveryCoral);
    }


    button:focus {
  background-color: var(--ddd-theme-default-keystoneYellow);
;
  
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

        alert("Saved Party!")

      }
    );
  }







  addRPGCharacter() {
    const usernameInput = this.shadowRoot.querySelector("#usernameInput");
    const username = usernameInput.value.trim();
    if (this.userNames.length < 10){
    import("@lrnwebcomponents/rpg-character/rpg-character.js").then(module => {
      const username = this.shadowRoot.querySelector("#usernameInput").value;
      this.userNames.push(username);
      this.requestUpdate();
      usernameInput.value = "";

    });

  } else {
    alert("Error! Can only have a maximum of 10 users!");
    usernameInput.value = "";
    return;

  }


  }


  deleteUser(username) {
    console.log(username);
    const rpgCharacter = this.shadowRoot.querySelector(`rpg-character[username="${username}"]`);
    if (rpgCharacter) {
        rpgCharacter.remove();
    }

    const usernameDisplay = this.shadowRoot.querySelector(`.username-display[usernameInput="${username}"]`);
    if (usernameDisplay) {
        usernameDisplay.remove();
    }

    const deleteButton = this.shadowRoot.querySelector(`.delete-btn[usernameInput="${username}"]`);
    if (deleteButton) {
        deleteButton.remove();
    }
  }






  deleteRPGCharacters() {
    const rpgCharacters = this.shadowRoot.querySelectorAll('rpg-character');
    const usernames = this.shadowRoot.querySelectorAll('.username-display');
    const deleteButton =  this.shadowRoot.querySelectorAll('.delete-btn');

    rpgCharacters.forEach(character => character.remove());
    usernames.forEach(username => username.remove());
    deleteButton.forEach(button => button.remove());

  }



  render() {
    return html`
<confetti-container id="confetti">
    <div id = "wholething">
        <div class = "background" style="background-color: ${this.color};">
        <h3 class = "heading">${this.title}</h3>
        <input type = "text" class = "username-input" id = "usernameInput" placeholder = "Enter name">
        <button class = "add" id = "user" @click="${this.addRPGCharacter}">Add User</button>
        <div class = "button">
        <button @click="${this.makeItRain}">Save Members Party</button>
        <button @click="${this.deleteRPGCharacters}">Delete All</button>
        </div>
        <div class="users">
                        ${this.userNames.map((nameInput) => html`
                            <div class="user-container">
                                <rpg-character username="${nameInput}"></rpg-character>
                                <p class = 'username-display' usernameInput="${nameInput}">${nameInput}</p>
                                <button class="delete-btn" usernameInput="${nameInput}" @click=${() => this.deleteUser(nameInput)}>Delete</button>
                            </div>
                        `)}
                    </div>
       
      </div>
       
      </div>
     </div>
    </div>
    </confetti-container>

    `;

  }


  static get properties() {
    return {

      title: { type: String },
      color: { type: String },
      open: { type: Boolean, reflect: false },
      button: { type: String },
      userNames: { type: Array },

    };
  }
}

globalThis.customElements.define(Project1.tag, Project1);

