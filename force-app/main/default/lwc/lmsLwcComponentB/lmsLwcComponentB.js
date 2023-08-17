import { LightningElement, wire} from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import{subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe} from 'lightning/messageService'

export default class LmsLwcComponentB extends LightningElement {
    recievedMessage
    subscription
    @wire(MessageContext)
    context
    
    connectedCallback(){
        this.subcribeMessage();
    }

    subcribeMessage(){
        this.subscription=subscribe(this.context,SAMPLEMC ,(message)=>{this.handleMeassge(message)},{scope:APPLICATION_SCOPE} )
    }

    handleMeassge(message){
       this.recievedMessage = message.lmsData.value?message.lmsData.value:"No message Published"
    }
    
    unsubcribeMessage(){
        unsubscribe(this.subscription);
        this.subscription = null
    }
}