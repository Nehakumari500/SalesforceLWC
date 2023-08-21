import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class Notifications extends LightningElement {

    toastHandler(){ 
        //{0} means the first index in messageData this is salesforce
        //{1} means the first index in messageData this is Object
        this.showToast("Success!!", "{0} Account Created!! {1}", "success")
    }
    toastHandlerTwo(){ 
        this.showToast("Error!!", "Account Creation Failed!!", "error")
    }
    toastHandlerThree(){ 
        this.showToast("Warning!!", "Password should have 15 characters!!", "warning")
    }
    toastHandlerFour(){ 
        this.showToast("Info!!", "Summer 20 realease is available!!", "info")
    }
    // if key and value is same than instead of title : title we can directly write title
    // this is called destructuring
    showToast(title, message, variant){ 
        const event = new ShowToastEvent({ 
            title,
            message,
            variant,
            messageData:[
                'Salesforce',{ 
                    url:'http://www.salesforce.com/',
                    label:'Click Here'
                }
            ],
            mode:'sticky'
        })
        this.dispatchEvent(event)
    }
}