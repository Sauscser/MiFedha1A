import React, {useEffect, useState} from 'react';

import {  updateCompany, updateGroup, updateGrpMembers, updateSMAccount} from '../../../src/graphql/mutations';
import {  getCompany, getGroup, getGrpMembers, getSMAccount } from '../../../src/graphql/queries';
import {  graphqlOperation, API,Auth} from 'aws-amplify';

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
import { updateBankAdmin } from '../../../src/graphql/mutations';


  


const UpdtSMPW = (props) => {
  const navigation = useNavigation();
  const [SigntryPW, setSigntryPW] = useState("");
  const [groupCnt, setgroupCnt] = useState("");
  const [LnAcCod, setLnAcCod] = useState("");
  const [SMPW, setSMPW] = useState("");
  const[isLoading, setIsLoading] = useState(false);
  const[ownr, setownr] = useState(null);
  const[names, setName] = useState(null);
  const[PhoneContact, setPhoneContact] = useState(null);
  
  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    
    setName(userInfo.username);
    setownr(userInfo.attributes.sub);
    setPhoneContact(userInfo.attributes.phone_number);
    
  };
  useEffect(() => {
    fetchUser();
  }, []);

  
        const fetchSMDtls = async () =>{
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try{
              const compDtls :any= await API.graphql(
                graphqlOperation(getSMAccount,{phonecontact:PhoneContact})
                );
                const loanAcceptanceCodes = compDtls.data.getSMAccount.loanAcceptanceCode   
                const owners = compDtls.data.getSMAccount.owner 
                const acStatuss = compDtls.data.getSMAccount.acStatus  
                const pwss = compDtls.data.getSMAccount.pw                
                
                          
                                      const updtSMDtls = async () => {
                                        if(isLoading){
                                          return;
                                        }
                                        setIsLoading(true);
                                        try{
                                            await API.graphql(
                                              graphqlOperation(updateSMAccount,{
                                                input:{
                                                  phonecontact:PhoneContact,
                                                  
                                                  loanAcceptanceCode:LnAcCod,
                                                  
                                                }
                                              })
                                            )
                                    
                                            
                                        }
                                        catch(error){if(error){
                                          console.log(error)
                                          Alert.alert("Please check internet; otherwise member doesnt exist")
                                          
                                      } 
                                    }
                                        setIsLoading(false);
                                        Alert.alert(names +", You have updated your LoanAcceptanceCode");
                                      } 

                                      if(SMPW!==pwss)
                                      {
                                          Alert.alert("Wrong SM A/C password; Prove Ownership of Account");
                                      }
                                      
                                      else if(ownr!==owners)
                                      {
                                          Alert.alert("You are not the Owner of the Account");
                                      }

                                      else if(acStatuss!=="AccountActive")
                                      {
                                          Alert.alert("This User Account is inactive");
                                      }

                                      
                                      else {updtSMDtls();}

        
                                

            } catch (error) {
                if(error){
                  Alert.alert("Check internet; otherwise User doesnt exist")
                  return
                }
              }
         
           

            setIsLoading(false);
              setgroupCnt("");
              setSigntryPW("")
              setSMPW("")
              setLnAcCod("")
          
            }
        
        useEffect(() =>{
          const groupCnts=groupCnt
            if(!groupCnts && groupCnts!=="")
            {
              setgroupCnt("");
              return;
            }
            setgroupCnt(groupCnts);
            }, [groupCnt]
             );

             useEffect(() =>{
                const SigntryPWs=SigntryPW
                  if(!SigntryPWs && SigntryPWs!=="")
                  {
                    setSigntryPW("");
                    return;
                  }
                  setSigntryPW(SigntryPWs);
                  }, [SigntryPW]
                   );

                   useEffect(() =>{
                    const LnAcCods=LnAcCod
                      if(!LnAcCods && LnAcCods!=="")
                      {
                        setLnAcCod("");
                        return;
                      }
                      setLnAcCod(LnAcCods);
                      }, [LnAcCod]
                       );

                       useEffect(() =>{
                        const SMPWs=SMPW
                          if(!SMPWs && SMPWs!=="")
                          {
                            setSMPW("");
                            return;
                          }
                          setSMPW(SMPWs);
                          }, [SMPW]
                           );
  
  
 return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill Chama Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={LnAcCod}
                      onChangeText={setLnAcCod}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>New Loan Acceptance Code</Text>
                  </View>       

                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={SMPW}
                      onChangeText={setSMPW}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>User Pass Word</Text>
                  </View>     

                                   
        
                  <TouchableOpacity
                    onPress={fetchSMDtls}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Update User Details
                    </Text>
                    {isLoading && <ActivityIndicator color={'Blue'} size="large"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default UpdtSMPW;