/**
 * @File Name          : UserInfoDetails.cls
 * @Description        : 
 * @Author             : ChangeMeIn@UserSettingsUnder.SFDoc
 * @Group              : 
 * @Last Modified By   : ChangeMeIn@UserSettingsUnder.SFDoc
 * @Last Modified On   : 6/1/2020, 5:44:55 PM
 * @Modification Log   : 
 * Ver       Date            Author      		    Modification
 * 1.0    6/1/2020   ChangeMeIn@UserSettingsUnder.SFDoc     Initial Version
**/
public with sharing class UserInfoDetails {
    @AuraEnabled(cacheable=true)
    public static User getUserDetails(String userId) {
        return [SELECT Id, Name, FirstName, Email from User WHERE Id=:userId];
    }
}