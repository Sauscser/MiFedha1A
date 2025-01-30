import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';


import styles from './styles';


export interface SMAccount {
    SMAc: {
      id: string,
benefactorAc: string,
benefactorPhone: string,
beneficiaryPhone:string,
prodName: string,
creatorName: string,
prodCost: number,
prodDesc: string,
createdAt: string,
amount: number,

    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        id ,
        benefactorAc,
        beneficiaryPhone,
        creatorName,
        prodCost,
        prodDesc,
        createdAt,
        amount
    
   }} = props ;

   const navigation = useNavigation();
   
   

    return (
        
             <View style = {{marginTop:"10%", justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'}}>
                  
            
            <View style = {styles.container}>              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Product Creator: {creatorName}                 
                    </Text>
                                        
                   
                   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Benefactor Account: {benefactorAc}                  
                    </Text> 

                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Beneficiary Name: {beneficiaryPhone}                  
                    </Text> 


                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Contribution Amount: {amount}                  
                    </Text> 

                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Contribution Time: {createdAt}                  
                    </Text> 
                    


        </View >
        <View style = {styles.viewForPressables2}>

</View>
       </View> 

        
                
       
    );
}; 

export default SMCvLnStts