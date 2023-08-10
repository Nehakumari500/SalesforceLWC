import { LightningElement , track , wire} from 'lwc';
import getAccount from '@salesforce/apex/WireDemoNoob.getAccount'

export default class NoobForEachLoop extends LightningElement {

@wire(getAccount)
accounts;

}