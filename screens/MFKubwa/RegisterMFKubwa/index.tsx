import React, {useEffect, useState} from 'react';

import {createSAgent, updateCompany} from '../../../src/graphql/mutations';

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
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import { getCompany } from '../../../src/graphql/queries';

const RegisterMFKubwaAcForm = props => {
  const [nationalId, setNationalid] = useState("");
  const [nam, setName] = useState("");
  const [phoneContact, setPhoneContact] = useState("");
  const[eml, setEml] =useState("");
  const[ownr, setOwnr] = useState(null);
  const [pword, setPW] = useState("");
  const[isLoading, setIsLoading] = useState(false);



  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();   
    setOwnr(userInfo.attributes.sub); 
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const gtCompDtls = async () =>{
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try{
        const compDtls :any= await API.graphql(
          graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
        );
        const actvAKbwa = compDtls.data.getCompany.ttlKFKbwActv

        

        const CreateNewSA = async () => {
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try {
            await API.graphql(
              graphqlOperation(createSAgent, {
                input: {
                  
                  saNationalid: nationalId,
                  name: nam,
                  phonecontact: phoneContact,
                  pw: pword,
                  TtlEarnings: 0,
                  actvMFNdog:0,
                  InctvMFNdog:0,
                  email: eml,
                  saBalance: 0,   
                  status: 'AccountActive',
                  owner:ownr,
                  
                },
              }),
            );

            
          } 

          

          
          
          catch (error) {
            console.log(error)
            if(!error){
              Alert.alert("Account registered successfully")
              
          } 
          else{Alert.alert("Please check your internet connection")
          return;}
          }
          setIsLoading(false); 
          await  updtActAdm();              
        };
        CreateNewSA();

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
                    ttlKFKbwActv:parseFloat(actvAKbwa) + 1,
                  }
                })
              )
          }
          catch(error){if(error){
            Alert.alert("Check your internet")
            return
          }}
          setIsLoading(false);
        }

       
      }

  catch(e){
    if(e){
      Alert.alert("Check your internet")
      return
    }
  }
          setIsLoading(false);
          setNationalid('');
          setPW("");
          setName("");
          setEml("");
          setPhoneContact("");
};

  useEffect(() =>{
  const mfkID=nationalId
    if(!mfkID && mfkID!=="")
    {
      setNationalid("");
      return;
    }
    setNationalid(mfkID);
    }, [nationalId]
     );

     useEffect(() =>{
      const mfkpw=pword
        if(!mfkpw && mfkpw!=="")
        {
          setPW("");
          return;
        }
        setPW(mfkpw);
        }, [pword]
         );

         useEffect(() =>{
          const mfknm=nam
            if(!mfknm && mfknm!=="")
            {
              setName("");
              return;
            }
            setName(mfknm);
            }, [nam]
             );

             useEffect(() =>{
              const mfkeml=eml
                if(!mfkeml && mfkeml!=="")
                {
                  setEml("");
                  return;
                }
                setEml(mfkeml);
                }, [eml]
                 );

                 useEffect(() =>{
                  const mfkphn=phoneContact
                    if(!mfkphn && mfkphn!=="")
                    {
                      setPhoneContact("");
                      return;
                    }
                    setPhoneContact(mfkphn);
                    }, [phoneContact]
                     );
  return (
    <View>
      <View
        
        style={styles.image}>
        <ScrollView>
          <View style={styles.loanTitleView}>
            <Text style={styles.title}>Fill MFKubwa Account Details Below</Text>
          </View>

          
          
          <View style={styles.sendLoanView}>
            <TextInput
              value={phoneContact}
              onChangeText={setPhoneContact}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFKubwa Phone</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={nationalId}
              onChangeText={setNationalid}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFKubwa National Id</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={nam}
              onChangeText={setName}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFKubwa Name</Text>
          </View>

         

          <View style={styles.sendLoanView}>
            <TextInput
              value={pword}
              onChangeText={setPW}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFKubwa Pass Word</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={eml}
              onChangeText={setEml}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFKubwa Email</Text>
          </View>
          

          <TouchableOpacity
            onPress={gtCompDtls}
            style={styles.sendLoanButton}>
            <Text style={styles.sendLoanButtonText}>
              Click to Create Account
            </Text>
            {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default RegisterMFKubwaAcForm;