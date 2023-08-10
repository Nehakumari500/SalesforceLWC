import { LightningElement,track } from 'lwc';
import getAccount from '@salesforce/apex/WireDemoNoob.getAccount'


const columns =[
    {label : "Account Id" , fieldName : "Id"},
    {label : "Name" , fieldName : "Name"}
]
export default class ImperativeNoob extends LightningElement {
 @track data = [];
 @track columns = columns;

connectedCallback(){
    getAccount()
    .then(result => { 
        this.data = result ;
    }).catch(error => console.log('error--->'+error))
}


}