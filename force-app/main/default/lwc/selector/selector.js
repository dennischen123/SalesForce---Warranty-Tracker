import { LightningElement, api, wire } from 'lwc';
import getAllWarranties from '@salesforce/apex/WarrantyController.getAllWarranties';
import searchWarranties from '@salesforce/apex/WarrantyController.searchWarranties';

export default class Selector extends LightningElement {
    @api warranties;
    @api error;

    @wire(getAllWarranties)
    wiredWarranties({ error, data }) {
        if (data) {
            this.warranties = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.warranties = undefined;
        }
    }

    handleSearch(event) {
        window.clearTimeout(this.delayTimeout);
        this.delayTimeout = setTimeout(() => {
            const w = getAllWarranties()
                .then((res) => {
                    const test = res.filter(a => a.Name.includes(event.detail))
                    this.warranties = test;
                })
        }, 300);
    }
}