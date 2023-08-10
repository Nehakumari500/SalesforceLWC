import { LightningElement , wire , track} from 'lwc';
import getAccount from '@salesforce/apex/WireDemoNoob.getAccount'

const columns = [
    { label : 'Name', fieldName : 'Name'},
    { label : 'Account ID', fieldName : 'Id'}
];
export default class NoobWire extends LightningElement {
    @track columns = columns;
    @track data =[];

    @wire (getAccount)
    wiredAccount({data,error}){
        if(data){
           this.data = data; 
        }
        else if(error){
            console.log(" error--->"+error);
        }
    }
}