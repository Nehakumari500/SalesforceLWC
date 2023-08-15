import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    name;
    isChildVisible= false;
    constructor(){
        super()
        //this.template.addEventListener('mouseover', fun); // this will work
        // this.template.querySelector(.checkconstructor); // this will not work as DOM is not loaded yet
        console.log("parent constructor called");
    }
    connectedCallback(){
        console.log("parent connectedCallback called");
    }
    renderedCallback(){
        console.log("parent renderedCallback called");
    }
    // whenever we will update the value in input field the renderedCallback will be called.
    changeHandler(event){
        this.name = event.target.value;
    }
    handleClick(){
        this.isChildVisible= !this.isChildVisible;
    }

    errorCallback(error,stack){
        console.log(error.message);
        console.log(stack);
    }
    
}