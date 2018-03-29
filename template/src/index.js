
import { RdWc } from "./rd-wc";
export class MyElement extends RdWc {
    static get template() {
        return `
            <div>ceci est pas du tout cool</div>
        `
    }

    static get observedAttributes() {
        return [
            'checked'
        ]
    }

    get checked() {
        return this._checked;
    }

    set checked(value) {
        this.setAttribute('checked', '');
        this._checked = value
    }

    attributeChangedCallback(n, o, newValue) {
        alert();
    }
}
customElements.define('my-element', MyElement);