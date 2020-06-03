import { LightningElement, api, wire } from 'lwc';
import Name from '@salesforce/schema/Warranty__c.Name';
import Brand from '@salesforce/schema/Warranty__c.Brand__c';
import Model from '@salesforce/schema/Warranty__c.Model__c';
import PurchaseDate from '@salesforce/schema/Warranty__c.purchase_Date__c';
import ExpirationDate from '@salesforce/schema/Warranty__c.Expiring_Date__c';
import SerialNumber from '@salesforce/schema/Warranty__c.Serial_Number__c';

export default class WarrantyForm extends LightningElement {
    @api recordId;
    @api objectApiName = 'Warranty__c';
    fields = [Name, Brand, Model, PurchaseDate, ExpirationDate, SerialNumber]

    handleCreateNewWarranty() {
        alert('new warranty added');
    }

}