import React, {useEffect, useState} from 'react';

import {createSMAccount, updateAgent, updateCompany} from '../../../src/graphql/mutations';
import { getAgent, getCompany, getSMAccount, } from '../../../src/graphql/queries';
import {Auth, DataStore, graphqlOperation, API} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';


import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';


  


const DeregMFNForm = (props) => {
  const navigation = useNavigation();

  const [phoneContact, setPhoneContact] = useState("");
  
  

  const gtCompDtls = async () =>{
    try{
      const compDtls :any= await API.graphql(
        graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
        );
        const ActvMFNUsrs = compDtls.data.getCompany.ttlKFNdgActv
        const InActvMFNUsrs = compDtls.data.getCompany.ttlKFNdgInActv
        
        const updtActAdm = async()=>{
          try{
              await API.graphql(
                graphqlOperation(updateCompany,{
                  input:{
                    AdminId:"BaruchHabaB'ShemAdonai2",
                    ttlKFNdgActv:parseFloat(ActvMFNUsrs) - 1,
                    ttlKFNdgInActv:parseFloat(InActvMFNUsrs) + 1,
                  }
                })
              )
          }
          catch(error){if(error){
            Alert.alert("Check your internet connection")
            return;
          }
        }
      }
        await updtActAdm();

        const KFNDtls = async () => {
          try{
              await API.graphql(
                graphqlOperation(updateAgent,{
                  input:{
                    phonecontact:phoneContact,
                    status:"AccountInactive"
                  }
                })
              )        
          }
          catch(error){if(!error){
            Alert.alert("Account deactivated successfully")
            return;
        } 
        else{Alert.alert("Please check your internet connection")} }
          
        } 
        await KFNDtls();   
      }
           catch (error) {
            if(error){
              Alert.alert("Check your internet connection")
              return;
          }
        }
          setPhoneContact("") 
        };    

        useEffect(() =>{
          const mfnphn=phoneContact
            if(!mfnphn && mfnphn!=="")
            {
              setPhoneContact("");
              return;
            }
            setPhoneContact(mfnphn);
            }, [phoneContact]
             );


 return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill MFNdogo Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={phoneContact}
                      onChangeText={setPhoneContact}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>MFNdogo Phone</Text>
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
        
        export default DeregMFNForm;