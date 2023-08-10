import { LightningElement , track } from 'lwc';
import getAccount from '@salesforce/apex/WireDemoNoob.getAccount';

export default class NoobComboBox extends LightningElement {
    value ='';
    @track accOption =[];
   /* using static value 
   get options(){
        return [
            {label : 'New' , value : "new Value"},
            {label : 'Old' , value : "old Value"},
            {label : 'None' , value : "None Value"}
        ];
    }*/

    // using imperative method 
    connectedCallback(){
        getAccount()
        .then(result =>{
            let arr =[];
            for(var i=0; i<result.length ;i++){
                arr.push({label : result[i].Name , value : result[i].Id });
            }
            this.accOption = arr;
        }).catch(error =>
            console.log("error--->"+ error)
        )

    }

    get options(){
        return this.accOption;
    }

    handleChange(event){
        this.value = event.detail.value;
    }

}