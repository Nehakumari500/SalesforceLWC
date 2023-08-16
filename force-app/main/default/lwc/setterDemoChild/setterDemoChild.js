import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userDetail

    @api
    get detail(){
        return  this.userDetail
    }
    set detail(data){
        let newAge = data.age*2
        this.userDetail = {...data, age:newAge, "location":"Melbourne"}
    }

    
    // get userDetail(){
    //     return {...(this.detail), age:(this.detail.age)*2, "location":"Melbourne"};
    // }


}