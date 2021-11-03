import React from 'react';
import {View, Text, ImageBackground, Pressable, TextInput, ScrollView} from 'react-native';
import styles from './styles';


export interface ChmNonCvLnSttusSent {
    Loaner: {
        id:String,
        loaneeName: string,
        amountGiven: number,
        amountExpectedBack: number,
        amountRepaid: number,
        lonBala: number,
        repaymentPeriod: number,
        loaneePhn:string,
        status: string,
        description: string,
        loanername:string,
        createdAt:string,
        updatedAt:string,
        
    }}

const ChmNonCvLnSttsSent = (props:ChmNonCvLnSttusSent) => {
   const {
    Loaner: {
    id,
    loaneePhn,
    amountGiven,
    amountExpectedBack,
    amountRepaid,
    lonBala,
    repaymentPeriod,

    status,
    loaneeName,
    description,
    
    createdAt,
    updatedAt,
   }} = props ;
    return (
        <View style = {styles.container}>              
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.loanAdvert}>                       
                       {/*loaner details */}   
                       {loaneeName}               
                    </Text>
            </View>
            
            <ScrollView >              
                       
                        

                    
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loan Id: {id}                 
                    </Text>
                    
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Amount Given (Ksh): {amountGiven.toFixed(2)}                
                    </Text>                     
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Amount Expected Back(Ksh): {amountExpectedBack.toFixed(2)}
                    </Text>   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                       Amount Repaid(Ksh): {amountRepaid.toFixed(2)}                  
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Loan Balance(Ksh): {lonBala.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Repayment Period in days: {repaymentPeriod}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Loan Status: {loaneePhn}                    
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

export default ChmNonCvLnSttsSent