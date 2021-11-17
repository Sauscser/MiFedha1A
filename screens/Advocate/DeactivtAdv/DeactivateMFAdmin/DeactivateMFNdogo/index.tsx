import React, {useEffect, useState} from 'react';

import {createSMAccount, updateAgent, updateCompany} from '../../../../../src/graphql/mutations';
import { getAgent, getCompany, getSMAccount, } from '../../../../../src/graphql/queries';
import {Auth, DataStore, graphqlOperation, API} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';


import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import { updateBankAdmin } from '../../../../../src/graphql/mutations';


  


const DeregMFAdvForm = (props) => {
  const navigation = useNavigation();

  const [AdvRegNo, setAdvRegNo] = useState("");
  const[isLoading, setIsLoading]= useState(false);

  const gtCompDtls = async () =>{
    if (isLoading){
      return;
    }
    setIsLoading(true);
    try{
      const compDtls :any= await API.graphql(
        graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
        );
        const ActvMFAdv = compDtls.data.getCompany.ttlKFAdvActv
        const actvMFAdv = compDtls.data.getCompany.ttlKFAdvInActv

        const KFAdminDtls = async () => {
          if(isLoading){
            return;
          }
          setIsLoading(false);
          try{
              await API.graphql(
                graphqlOperation(updateBankAdmin,{
                  input:{
                    advregnu:AdvRegNo,
                    status:"AccountInactive"
                  }
                })
              )
      
              
          }
      
          
          catch(error){if(!error){
            Alert.alert("Account deactivated successfully")
            
        } 
        else{Alert.alert("Please check your internet connection")
      return;} }
      setIsLoading(false);
          

          const updtActAdm = async()=>{
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try{
                await API.graphql(
                  graphqlOperation(updateCompany,{
                    input:{
                      AdminId:"BaruchHabaB'ShemAdonai2",
                      ttlKFAdvActv:parseFloat(ActvMFAdv) - 1,
                      ttlKFAdvInActv:parseFloat(actvMFAdv) + 1,
                    }
                  })
                )
            }
            catch(error){if(!error){
              Alert.alert("Account deactivated successfully")
              
          } 
          else{Alert.alert("Please check your internet connection")
        return;}}
        setIsLoading(false);
          }
          await updtActAdm();
         
        } 
        KFAdminDtls();         
                  
          } catch (error) {
            if(!error){
              Alert.alert("Account deactivated successfully")
              
          } 
          else{Alert.alert("Please check your internet connection")
        return;};
          }
          setIsLoading(false);
          setAdvRegNo("") 
          Alert.alert(AdvRegNo + " successfully deregistered.")
        };    
        
        useEffect(() =>{
          const RegN=AdvRegNo
            if(!RegN && RegN!=="")
            {
              setAdvRegNo("");
              return;
            }
            setAdvRegNo(RegN);
            }, [AdvRegNo]
             );


 return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill MFAdvocate Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={AdvRegNo}
                      onChangeText={setAdvRegNo}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>MFAdvocate Reg Number</Text>
                  </View>
        
                  
        
                  <TouchableOpacity
                    onPress={gtCompDtls}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to DeRegister 
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default DeregMFAdvForm;