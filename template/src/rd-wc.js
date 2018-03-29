

export class RdWc extends HTMLElement {
    connectedCallback() {
        this.addTemplate();
    }

    addTemplate() {
        if(this.constructor.template) {
            let shadowRoot = this.attachShadow({mode: "open"});
            let template = document.createElement('template');
            template.innerHTML = this.constructor.template;
            shadowRoot.appendChild(template.content.cloneNode(true))
        }
    }
}