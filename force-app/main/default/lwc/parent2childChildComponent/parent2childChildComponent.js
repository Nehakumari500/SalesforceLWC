import { LightningElement ,api} from 'lwc';

export default class Parent2childChildComponent extends LightningElement {
    @api message;
    @api cardHeading;
    @api number;
    @api isValid;
    @api carouselData;
    @api progressValue;

    val = 20;

    changeHandler(event){
        this.val = event.target.value;
    }

     @api resetSlider(){
        this.val = 50; 
    }
}