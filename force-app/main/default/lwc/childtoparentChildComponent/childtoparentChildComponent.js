import { LightningElement } from 'lwc';

export default class ChildtoparentChildComponent extends LightningElement {

    closeHandler(){
        //const myEvent = new CustomEvent('close'); // no argument
        const myEvent = new CustomEvent('close',{
            bubbles:true,
            detail:"Modal closed Successfully"
        });

        /* complex data 
        const myEvent = new CustomEvent('close',{
            detail:{
                msg:"Modal closed Successfully"
            }
        });*/
        this.dispatchEvent(myEvent);
    }

    footerHandler(){
        console.log("footerHandler called")
    }
}