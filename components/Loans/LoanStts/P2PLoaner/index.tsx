import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,    ScrollView, Pressable} from 'react-native';
import styles from './styles';


export interface SMCvLnSttus {
    Loanee: {
      loanID:string,
        loanerPhn: string,
        amountgiven: number,
        amountexpected: number,
        amountrepaid: number,
        lonBala: number,
        repaymentPeriod: number,
        advregnu: string,
        loanername:string,
        status: string,
        description: string,
        createdAt:string,
        updatedAt:string,
        amountExpectedBackWthClrnc: number,
        DefaultPenaltySM2:number,
        clearanceAmt: number,
        advEmail:string,
        crtnDate: number,
      interest:number
        
        
    }}

const SMCvLnStts = (props:SMCvLnSttus) => {
   const {
    Loanee: {
      loanID,
    loanerPhn,
    clearanceAmt,
    amountexpected,
    amountrepaid,
    lonBala,
    repaymentPeriod,
    advregnu,
    amountExpectedBackWthClrnc,
    DefaultPenaltySM2,
    loanername,
    status,
    description,
    createdAt,
    advEmail,
    crtnDate,
         interest
   }} = props ;

   const navigation = useNavigation();
   const SndChmMmbrMny = () => {
      navigation.navigate ("VwP2PMyLoanersDtld", {loanID})
   }

   const VwRpayments = () => {
      navigation.navigate ("VwP2PSent", {loanID})
   }

   const Repay = () => {
      navigation.navigate ("RpyPal2Pal", {loanID})
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
              (clearanceAmt) -  (DefaultPenaltySM2)
      
              const netLnBal2 = (netLnBal) * 
              ((Math.pow(1 + (interest)/36500, dayselapsed)))

              const LonBal1 = netLnBal2 + (clearanceAmt) +  (DefaultPenaltySM2)

   
    return (
        <View style = {{marginTop:"10%"}}>              
            
            <Pressable onPress={SndChmMmbrMny} style = {styles.container}>
            <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loaner Name: {loanername}               
                    </Text>
                  
            <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loan Id: {loanID}                 
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loaner Contact: {loanerPhn}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/* interest*/}
                       Loan Balance with Penalties(Ksh): {LonBal1.toFixed(0)}                    
                    </Text> 

                    </Pressable>

                    <View style = {styles.viewForPressables2}>
                    
                    <Pressable
                      onPress={VwRpayments}
                      style = {styles.loanFriendButton}
                      >            
                        <Text style = {styles.loanAFriendText}>ViewRpymnts</Text>            
                    </Pressable>
                   
                    <Pressable
                      onPress={Repay}
                      style = {styles.loanFriendButton}>            
                        <Text style = {styles.loanAFriendText}>Repay</Text>            
                    </Pressable>  
                   
                     
                    </View>
        </View>
    );
}; 

export default SMCvLnStts