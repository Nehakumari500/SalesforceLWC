/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 08-05-2023
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class WireDemoNoob {

    //cacheable = true sirf wire k liye use karte h not for imperative method
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccount(){
        List<Account> accList = [Select Name, Id from Account Limit 10]; 
        return  accList;
    }

    //this method will return the contacts of Selected Account in LWC combobox
    
    @AuraEnabled
    public static List<Contact> getContacts(String selectedAccontId){
        try {
            List<Contact> contactList = [Select Id , Name , Email, AccountId from Contact where AccountId =: selectedAccontId];
            return contactList;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
 
    // @AuraEnabled
    // public static List<Contact> getContact(string selectedRowId){
    //     try {
            
    //     } catch (Exception e) {
    //         throw new AuraHandledException(e.getMessage());
    //     }
    // }
}