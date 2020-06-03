/**
 * @File Name          : WarrantyController.cls
 * @Description        : 
 * @Author             : ChangeMeIn@UserSettingsUnder.SFDoc
 * @Group              : 
 * @Last Modified By   : ChangeMeIn@UserSettingsUnder.SFDoc
 * @Last Modified On   : 6/3/2020, 1:34:54 PM
 * @Modification Log   : 
 * Ver       Date            Author      		    Modification
 * 1.0    6/1/2020   ChangeMeIn@UserSettingsUnder.SFDoc     Initial Version
**/
public with sharing class WarrantyController {
    @AuraEnabled(Cacheable=true)
    public static List<Warranty__c> getAllWarranties() {
        List<Warranty__c> warranties = [SELECT Id, Name, Brand__c, Expiring_Date__c, Purchase_Date__c, Model__c, OwnerId
            FROM Warranty__c Name];
        System.debug(warranties);
        return [SELECT Id, Name, Brand__c, Expiring_Date__c, Purchase_Date__c, Model__c, OwnerId
            FROM Warranty__c Name];
    }
    @AuraEnabled(Cacheable=true)
    public static List<Warranty__c> searchWarranties(String searchTerm) {
        searchTerm = searchTerm.trim();
        if (searchTerm == '') {
            return getAllWarranties();
        }

        searchTerm = '%' + searchTerm + '%';
		List<Warranty__c> warranties = [SELECT Id, Name, Brand__c, Expiring_Date__c, Purchase_Date__c, Model__c, OwnerId
        FROM Warranty__c WHERE Name LIKE :searchTerm ORDER BY Name];
        System.debug(warranties);
        return [SELECT Id, Name, Brand__c, Expiring_Date__c, Purchase_Date__c, Model__c, OwnerId
        FROM Warranty__c WHERE Name LIKE :searchTerm ORDER BY Name];
    }
}