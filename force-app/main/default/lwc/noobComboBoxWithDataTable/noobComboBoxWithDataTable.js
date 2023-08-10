import { LightningElement , track } from 'lwc';
//@salesforce/apex modules only support default imports.
import getAccount  from '@salesforce/apex/WireDemoNoob.getAccount';
import getContacts from '@salesforce/apex/WireDemoNoob.getContacts';
import {NavigationMixin} from 'lightning/navigation';

const actions =[
    {label : 'View' , name : "view"},
    {label : 'Edit' , name : "edit"},
    {label : 'Delete' , name : "delete"}
];
const columns = [
    {label: 'Contacts Name', fieldName : 'Name'},
    {label: 'Contacts Email' ,fieldName : 'Email'},
    {type: 'action', typeAttributes: {rowActions : actions}}

]


export default class NoobComboBoxWithDataTable extends NavigationMixin(LightningElement) {
     @track value = '';
     @track optionArray = []; // this will store the options for combobax
     @track data = [];
     @track columns = columns;

    get options(){
       return this.optionArray;
    }

    handleChangeValue(event){
        // event.target will also work instead of event.detail . but shadow Dom can cause isuue to better to use detail
        this.value = event.detail.value;
        //window.alert(this.value)

        // Call apex method to get contact list
        getContacts({selectedAccontId :this.value})
        .then(result => {
            this.data = result;
        })
        .catch(error => console.error("contact list not recevied" +error));
    }
    // imperative apex call
    connectedCallback(){
        getAccount()
        .then(result =>{ 
            let arr =[];
            result.forEach(element => {
                arr.push({ label :element.Name , value : element.Id })
            });
            
           this.optionArray = arr ;
        } )
        .catch(error=> console.log(error))
    }

    handleRowAction(event){
        const actionName = event.detail.action.name;
        console.log("eventdetail--->" + JSON.stringify(event.detail));
        const row = JSON.stringify(event.detail.row);
        console.log ("row---->" + row);
        
        switch(actionName){
            case 'view':
                //console.log("view clicked");
                this.navigateToSelectedContactRecordPage(row);
                break;

            case 'edit':
                console.log("edit clicked");
                break;

            case 'delete':
                console.log("delete clicked");
                break;
        }
    }

    navigateToSelectedContactRecordPage(currentRow){
        const contact = currentRow;
        console.log( " navogation row details--->"+contact.Id);
       this[NavigationMixin.Navigate]({
            type: 'standard_recordPage',
            attributes :{
                recordId : contact.Id,
                actionName : 'view'
            }
       })
    }

}