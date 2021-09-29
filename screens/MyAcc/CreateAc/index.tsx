import React, {useEffect, useState} from 'react';

import {createSMAccount} from '../../../src/graphql/mutations';
import { getSMAccount, } from '../../../src/graphql/queries';
import {Auth, DataStore, graphqlOperation, API} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';
import { UserReg } from '../../../types';

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

export type UserReg = {
  usr:String;
  
}

const CreateAcForm = (props:UserReg) => {

  const{usr} = props;

  


  const navigation = useNavigation();

  const [nationalId, setNationalid] = useState('');
  const [nam, setName] = useState(null);
  const [phoneContact, setPhoneContact] = useState(null);
  const [awsEmail, setAWSEmail] = useState(null);
  const [acBal, setAcBal] = useState('');
  const [pword, setPW] = useState('');
  const [stts, setStatus] = useState('');
  const [myUserId, setMyUserId] = useState('');
  const[usrDtl, setUsrDtl] = useState("");


  

  
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      setName(userInfo.username);

      setPhoneContact(userInfo.attributes.phone_number);
      setAWSEmail(userInfo.attributes.email);

      

      
    };

    

    useEffect(() => {
        fetchUser();
      }, []);


  
        
        
          
            
        
          const onCreateNewSMAc = async () => {
            try {
              await API.graphql(
                graphqlOperation(createSMAccount, {
                  input: {
                    nationalid: nationalId,
                    name: nam,
                    phonecontact: phoneContact,
                    awsemail: awsEmail,
                    balance: 0,
                    loanAcceptanceCode:awsEmail,
                   
                    pw: pword,
                    ttlDpstSM: 0,
          TtlWthdrwnSM: 0,
          ttlLnInSM: 0,
          ttlLnOutSM: 0,
          ttlLoanRecovered: 0,
          blTimesSM: 0,
          blClrdtmsSM: 0,
          clrdNnvrBLSM: 0,
          actvLnsSM: 0,
          ttlActiveLnsInAmtSM: 0,
          ttlBLLoansInAmtSM: 0,
          ttlClrdLnsInAmtSM: 0,
          ttlActiveLnsOutAmtSM: 0,
          ttlBLLoansOutAmtSM: 0,
          ttlClrdLnsOutAmtSM: 0,
          tmsIHvBrwdSM: 0,
          tmsIHvLndSM: 0,

         
        
          ttlDpstChm: 0,
          ttlWithdrwlChm: 0,
        
          ttlChmLnIn: 0,
        
          blChmTimes: 0,
          blChmClrdtms: 0,
          clrdNnvrBLChm: 0,
          actvLnsChm: 0,
          ttlActiveLnsInAmtChm: 0,
          ttlBLLoansInAmChmt: 0,
          ttlClrdLnsInAmtChm: 0,
        
          tmsIHvBrwdChm: 0,
          tmsIHvLndChm: 0,
        
          ttlLnInCrdSls: 0,
          ttlLnOutCrdSls: 0,
          blTimesCrdSls: 0,
          blClrdtmsCrdSls: 0,
          clrdNnvrBLCrdSls: 0,
          actvLnsCrdSls: 0,
          ttlActiveLnsInAmtCrdSls: 0,
          ttlBLLoansInAmtCrdSls: 0,
          ttlClrdLnsInAmtCrdSls: 0,
          ttlActiveLnsOutAmtCrdSls: 0,
          ttlBLLoansOutAmtCrdSls: 0,
          ttlClrdLnsOutAmtCrdSls: 0,
          tmsIHvBrwdCrdSls: 0,
          tmsIHvLndCrdSls: 0,
        
          TotalTymsBL: 0,
                    acActivenessStatus: 'AccountActive',
                    blStatus: 'LoanCleared',
                    loanStatus: "NoLoan"
                  },
                }),
              );
        
              await userDtls ()
            } catch (error) {
              console.log('Error creating account', error);
            }
        
            setNationalid('');
    setPW('');
          };
        
        
          const userDtls = async () => {
    try {
      const resp:any = await API.graphql(
        graphqlOperation(getSMAccount, { nationalid: nationalId })
      );

      const usr = resp.data.getSMAccount.nationalid;

      
      const regUsrDtls = () => {
        navigation.navigate("RegUsrScrn", {usr});
      };
      

      regUsrDtls();
    } catch (e) {
      console.log(e);
    }
    setNationalid("");
  };

  useEffect(() => {
    userDtls();
  }, []);
        
          return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill Your Account Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={nationalId}
                      onChangeText={setNationalid}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>National Id</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={pword}
                      onChangeText={setPW}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Pass Word</Text>
                  </View>
        
                  <TouchableOpacity
                    onPress={onCreateNewSMAc}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Create Account
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default CreateAcForm;