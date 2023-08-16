import { LightningElement } from 'lwc';

export default class ChildtoparentParentComponent extends LightningElement {
    showModal = false;
    msg;
    clickHandler(){
        this.showModal = true;
    }
    closeHandler(event){
        this.showModal = false;
        this.msg = event.detail;
    }
}