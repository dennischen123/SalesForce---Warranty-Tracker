import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToNewRecord extends NavigationMixin(LightningElement) {
    navigateToNewWarranty() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Warranty__c',
                actionName: 'new'
            }
        });
    }
}