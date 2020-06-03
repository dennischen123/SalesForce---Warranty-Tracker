import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, api } from 'lwc';

export default class Warranty extends NavigationMixin(LightningElement) {
    @api warranty;
    detailString = '';

    handleWarrantyView(event) {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.warranty.Id,
                objectApiName: 'Warranty__c',
                actionName: 'view',
            }
        })
    }

    get detailsUrlString() {
        return `https://dennischen-dev-ed.lightning.force.com/lightning/r/Warranty__c/${this.warranty.Id}/view`
    }
}