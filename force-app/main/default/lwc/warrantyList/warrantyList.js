import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, wire, api } from 'lwc';
import searchWarranties from '@salesforce/apex/WarrantyController.searchWarranties';
import getAllWarranties from '@salesforce/apex/WarrantyController.getAllWarranties';

export default class WarrantyList extends NavigationMixin(LightningElement) {
    searchTerm = '';
    @api warranties;
    @api error;

    handleSearchTermChange(event) {
        this.searchTerm = event.target.value;
        const searchTermEvent = new CustomEvent('searched', {
            detail: this.searchTerm
        });
        this.dispatchEvent(searchTermEvent);
    }

    get hasResults() {
        return (this.warranties.length > 0);
    }

}