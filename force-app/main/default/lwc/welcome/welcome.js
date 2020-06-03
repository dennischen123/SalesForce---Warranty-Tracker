import { LightningElement, wire, track, api } from 'lwc';
import Id from '@salesforce/user/Id';
import getUserDetails from '@salesforce/apex/UserInfoDetails.getUserDetails';

export default class Welcome extends LightningElement {
    @api length;
    @api warranties;
    userId = Id;
    firstName
    user;
    error;
    @wire(getUserDetails, {
        userId: '$userId'
    })
    wireUser({
        error,
        data
    }) {
        if (data) {
            this.user = data;
            this.firstName = data.FirstName;
        } else if (error) {
            this.error = error;
        }
    }
}