import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,    Pressable} from 'react-native';
import styles from './styles';


export interface ChmCvLnSttusRec {
    Loanee: {
      loanID:string,
        grpContact: string,
        amountGiven: number,
        amountExpectedBack: number,
        amountExpectedBackWthClrnc:number,
        amountRepaid: number,
        lonBala: number,
        repaymentPeriod: number,
        advRegNu: string,
        status: string,
        description: string,
        LoanerName:string,
        createdAt:string,
        updatedAt:string,
        crtnDate: number,
      interest:number,
      clearanceAmt: number,
      DefaultPenaltyChm2:number
        
    }}

const ChmCvLnSttsRec = (props:ChmCvLnSttusRec) => {
   const {
    Loanee: {
      loanID,
    
    clearanceAmt,
    DefaultPenaltyChm2,
    amountExpectedBackWthClrnc,
    amountRepaid,
    lonBala,
    repaymentPeriod,
    advRegNu,
    status,
    LoanerName,
    description,
    grpContact,
    createdAt,
    updatedAt,
    crtnDate,
         interest
   }} = props ;

   const navigation = useNavigation();
   const SndChmMmbrMny = () => {
      navigation.navigate ("ChmLoanersDtls", {loanID})
   }

   const VwRpayments = () => {
      navigation.navigate ("ViewNonLnsSntChm", {loanID})
   }

   const Repay = () => {
      navigation.navigate ("RepyChmCovLns", {loanID})
   }

   const today = new Date();
              let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
              let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
              let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
              let years = (today.getFullYear() < 10 ? '0' : '') + today.getFullYear();
              let months = (today.getMonth() < 10 ? '0' : '') + today.getMonth();
              let months2 = parseFloat(months)
              let days = (today.getDate() < 10 ? '0' : '') + today.getDate();
              
              const now:any = years+ "-"+ "0"+months2 +"-"+ days+"T"+hours + ':' + minutes + ':' + seconds;

              const curYrs = parseFloat(years)*365;
              const curMnths = (months2)*30.4375;
              const daysUpToDate = curYrs + curMnths + parseFloat(days)

              const dayselapsed = (crtnDate - daysUpToDate) *(-1)

              const netLnBal = (amountExpectedBackWthClrnc) - 
              (clearanceAmt) -  (DefaultPenaltyChm2)
      
              const netLnBal2 = (netLnBal) * 
              ((Math.pow(1 + (interest)/36500, dayselapsed)))

              const LonBal1 = netLnBal2 + (clearanceAmt) +  (DefaultPenaltyChm2)


    return (
      <View style = {{marginTop:"10%"}}>              
            
      <Pressable onPress={SndChmMmbrMny} style = {styles.container}>
      <Text style = {styles.ownerName}>                       
               
                 Group Name: {LoanerName}               
              </Text>
            
      <Text style = {styles.ownerName}>                       
                 
                 Loan Id: {loanID}                 
              </Text>
              <Text style = {styles.ownerName}>                       
                
                 Group Contact: {grpContact}                 
              </Text>

             

              <Text style = {styles.ownerName}>                       
                 {/* interest*/}
                 Loan Balance with penaties(Ksh): {LonBal1.toFixed(0)}                    
              </Text>

               

              </Pressable>

              <View style = {styles.viewForPressables2}>
              <View>
              <Pressable
                onPress={VwRpayments}
                style = {styles.loanFriendButton}
                >            
                  <Text>ViewRpymnts</Text>            
              </Pressable>
              </View>   
              <View>
              <Pressable
                onPress={Repay}
                style = {styles.loanFriendButton}>            
                  <Text>Repay</Text>            
              </Pressable>  
              </View>
               
              </View>
  </View>
    );
}; 

export default ChmCvLnSttsRec