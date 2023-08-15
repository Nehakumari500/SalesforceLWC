import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor(){
        super()
        console.log("child constructor called");
    }
    connectedCallback(){
        console.log("child connectedCallback called");
        // window property exists when the event runs in the browser. yhis causes the memory leak issue
        //window.addEventListener('click', this.handleClick);
        throw new Error('Loading of child component failed');
    }
    renderedCallback(){
        console.log("child renderedCallback called");
    }
    disconnectedCallback(){
        alert("child disconnectedCallback called");
        // to avoid memory leak issue . we remove listener in disconnectedCallback
        //window.removeEventListener('click', this.handleClick);
    }
}