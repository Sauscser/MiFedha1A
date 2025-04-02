import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,    ScrollView, Pressable} from 'react-native';
import styles from './styles';


export interface SMCvLnSttus {
    Loanee: {
      loanID: string,
      itemName: string,
  
      buyerContact: string,
      
      buyerName:string,
   
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      lonBala:number,
      description: string,
      status: string,
      advregnu: string,
      createdAt:string,
      updatedAt:string,
      crtnDate: number,
      interest:number,
      amountExpectedBackWthClrnc:number,
      DefaultPenaltyCredSl2:number,
      clearanceAmt:number
        
    }}

const CredSlrCvLnStts = (props:SMCvLnSttus) => {
   const {
    Loanee: {
      loanID,
      itemName,
      amountExpectedBackWthClrnc,
      DefaultPenaltyCredSl2,
      clearanceAmt,
     
      buyerContact,
      
      buyerName,
   
      amountSold,
      amountexpectedBack,
      amountRepaid,
      repaymentPeriod,
      lonBala,
      description,
      status,
      advregnu,
      createdAt,
      updatedAt,
      crtnDate,
      interest
   }} = props ;

   const navigation = useNavigation();
   const SndChmMmbrMny = () => {
      navigation.navigate ("VwB2PMyLoaneesDtld", {loanID})
   }

   const VwRpayments = () => {
      navigation.navigate ("VwB2PReceived", {loanID})
   }

   const Blacklist = () => {
      navigation.navigate ("BLBiz2Pal", {loanID})
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
   (clearanceAmt) -  (DefaultPenaltyCredSl2)

   const netLnBal2 = (netLnBal) * 
   ((Math.pow(1 + (interest)/36500, dayselapsed)))

   const LonBal1 = netLnBal2 + (clearanceAmt) +  (DefaultPenaltyCredSl2)

   
    return (
      <View style = {styles.container}>              
      <View style = {{alignItems:"center"}}>
      <Text style = {styles.loanAdvert}>                       
                 {/*loaner details */}   
                 {buyerName}               
              </Text>
      </View>
      
      <ScrollView >              
                 
                  

              
               <Text style = {styles.ownerName}>                       
                 {/*loaner details */}   
                 Loan Id: {loanID}                 
              </Text>
              
              <Text style = {styles.ownerContact}>                       
                  {/*loaner details */}  
                  Cash Price (Ksh): {amountSold.toFixed(2)}                
               </Text>                     
               <Text style ={styles.amountoffered}>                       
                  {/* amount*/} 
                  Credit Sale Price(Ksh): {amountexpectedBack.toFixed(2)}
               </Text>    
              <Text style = {styles.repaymentPeriod}>                       
                 {/* repaymentPeriod*/}
                 Amount Repaid(Ksh): {amountRepaid.toFixed(2)}                  
              </Text> 
              <Text style = {styles.interest}>                       
                 {/* interest*/}
                 Loan Balance with Penalties(Ksh): {LonBal1.toFixed(0)}                    
              </Text> 
              <Text style = {styles.interest}>                       
                 {/* interest*/}
                 Repayment Period in days: {repaymentPeriod}                    
              </Text> 
              <Text style = {styles.interest}>                       
                 {/* interest*/}
               Buyer Contact: {buyerContact}                    
              </Text> 
              <Text style = {styles.interest}>                       
                 {/* interest*/}
                Advocate Registration Number: {advregnu}                    
              </Text> 
              <Text style = {styles.interest}>                       
                 {/* interest*/}
                Item Name(s): {itemName}                    
              </Text> 
          
              <Text style = {styles.interest}>                       
                 {/* interest*/}
                Loan Status: {status}                    
              </Text> 
              <ScrollView>
              <Text style = {styles.loanerotherdescriptions} >                       
                 {/* other description*/} 
                 Created At: {createdAt}                 
              </Text>   
              <Text style = {styles.loanerotherdescriptions} >                       
                 {/* other description*/} 
                 Last Update: {updatedAt}                 
              </Text>   
              <Text style = {styles.loanerotherdescriptions} >                       
                 {/* other description*/} 
                 More: {description}                 
              </Text>   
              </ScrollView>              
      
  </ScrollView>
          
  </View>
    );
}; 

export default CredSlrCvLnStts