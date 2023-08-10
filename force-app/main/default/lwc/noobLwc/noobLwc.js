import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class NoobLwc extends LightningElement {
    myTitle = "Salesforce Noob"
    content = "Hello Noob youtube hindi video ";
    greeting = "world";

    // whenever a component is rendered in salesforce . Its connectedCallback function  is automayically called
    connectedCallback(){
        //window.alert(this.content);
        let callMyFunction = this.myFunction(10,2);
        window.alert("callMyFunction---->" + callMyFunction);
    }
     
    handleChange(event){
        this.greeting = event.target.value;
    }

    handleClick(event){
        //alert(this.greeting.length);
        this.showToast(this.myTitle);
    }
    // Variant = success(Green color)  , warning(Yellow Color) , error(Red color) 
    showToast(myTitleArgument){
        const event = new ShowToastEvent({
            title : 'Show toast demo '+ myTitleArgument,
            message : 'Want to display toast example',
            variant : 'success'
        })
        this.dispatchEvent(event);
    }

    /* using normal function
    myFunction(divident,divisor){
        return(divident/divisor);
    }*/
    // Using Arrow function
     myFunction = (divident,divisor) => divident/divisor ;
}