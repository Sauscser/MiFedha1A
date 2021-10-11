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
} from 'react-native';
import styles from './styles';
import { updateBankAdmin } from '../../../../src/graphql/mutations';


  


const DeregMFAdminForm = (props) => {
  const navigation = useNavigation();

  const [AdminId, setAdminId] = useState("");
  
  const KFAdminDtls = async () => {
    try{
        await API.graphql(
          graphqlOperation(updateBankAdmin,{
            input:{
              nationalid:AdminId,
              status:"AccountInactive"
            }
          })
        )

        const gtCompDtls = async () =>{
            try{
              const compDtls :any= await API.graphql(
                graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                );
                const inActvMFAdmin = compDtls.data.getCompany.ttlKFAdmInActv
                const actvMFAdmin = compDtls.data.getCompany.ttlKFAdmActv
                   
                const updtActAdm = async()=>{
                      try{
                          await API.graphql(
                            graphqlOperation(updateCompany,{
                              input:{
                                AdminId:"BaruchHabaB'ShemAdonai2",
                                ttlKFAdmActv:parseFloat(actvMFAdmin) - 1,
                                ttlKFAdmInActv:parseFloat(inActvMFAdmin) + 1,
                              }
                            })
                          )
                      }
                      catch(error){console.log(error)}
                    }
                    await updtActAdm();
                    
                  } catch (error) {
                    console.log('Error creating account', error);
                  }
                };    

                gtCompDtls();
              useEffect(() => {
              gtCompDtls();
              }, []);
    }
    catch(error){console.log(error)}
    setAdminId("") 
  } 
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
                      value={AdminId}
                      onChangeText={setAdminId}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>MFNdogo Phone</Text>
                  </View>
        
                  
        
                  <TouchableOpacity
                    onPress={KFAdminDtls}
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
        
        export default DeregMFAdminForm;