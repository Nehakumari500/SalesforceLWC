import { LightningElement , api} from 'lwc';
import ACCOUNT_Object from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import EMAIL_FIELD from '@salesforce/schema/Account.Email';

export default class NoobLDS extends LightningElement {
    objectAPI = ACCOUNT_Object;
    nameField = NAME_FIELD;
    @api recordId;


}