import React, {useState, useEffect} from 'react';
import {View, Text,   FlatList, Alert} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import NonLnSent from "../../../components/MyAc/ViewRecNonLns";
import styles from './styles';
import { getCompany, getSMAccount,   vwMyRecMny, vwMySntMny } from '../../../src/graphql/queries';
import { updateCompany, updateSMAccount } from '../../../src/graphql/mutations';
import { useRoute } from '@react-navigation/native';

const FetchSMNonLnsSnt = props => {

    const[SenderPhn, setSenderPhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Recvrs, setRecvrs] = useState([]);
    const route = useRoute();

    const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
              
        setSenderPhn(userInfo.attributes.email);
             
      };
      
  
      useEffect(() => {
          fetchUser();
        }, []);

        const fetchLoanees = async () => {
            setLoading(true);
            try {
              const Lonees:any = await API.graphql(graphqlOperation(vwMySntMny, 
              {
                      senderPhn: route.params.MFNId,
                      sortDirection: 'DESC',
                      limit: 100,
                      filter:{status:{eq:"BiznaShare"}}
                    }
               
                  ));
                  setRecvrs(Lonees.data.VwMySntMny.items);

                  const fetchUsrDtls = async () => {
                    try {
                            const MFNDtls: any = await API.graphql(
                                graphqlOperation(getSMAccount, {awsemail: SenderPhn}
                            ),);
              
                            const balances = MFNDtls.data.getSMAccount.balance;
                            
                            const fetchCompDtls = async () => {
                              try {
                                      const MFNDtls1: any = await API.graphql(
                                          graphqlOperation(getCompany, {AdminId: "BaruchHabaB'ShemAdonai2"}
                                      ),);
                      
                                      const companyEarningBals = MFNDtls1.data.getCompany.companyEarningBal;
                                      const companyEarnings = MFNDtls1.data.getCompany.companyEarning;
                                      const enquiryFees = MFNDtls1.data.getCompany.enquiryFee;
                                      
                                      
                                                  const updtActAdm = async()=>{
                                                    
                                                    try{
                                                        await API.graphql(
                                                          graphqlOperation(updateCompany,{
                                                            input:{
                                                              AdminId:"BaruchHabaB'ShemAdonai2",
                                                              companyEarningBal:parseFloat(companyEarningBals) + parseFloat(enquiryFees),
                                                              companyEarning:parseFloat(companyEarnings) + parseFloat(enquiryFees),
                                                            }
                                                          })
                                                        )
                                                    }
                                                    catch(error){
                                                      if(error){
                                                        Alert.alert("Check your internet connection")
                                                        return;
                                                    }
                                                    }
                                                    await updtUsrAc();
                                                    
                                                  }
              
                                                  const updtUsrAc = async()=>{
                                                    
                                                    try{
                                                        await API.graphql(
                                                          graphqlOperation(updateSMAccount,{
                                                            input:{
                                                              awsemail: SenderPhn,
                                                              balance:parseFloat(balances) - parseFloat(enquiryFees),
                                                            }
                                                          })
                                                        )
                                                    }
                                                    catch(error){
                                                      if(error){
                                                        Alert.alert("User does not exist")
                                                        return;
                                                    }
                                                    }
                                                                                                        
                                                  }
                              
              
                      if(parseFloat(balances) < parseFloat(enquiryFees) ){
                          Alert.alert("Account Balance is very little");
                          return;
                        }
                        else{
                            
                          updtActAdm();
                            }
                            
                              }
                          catch (e)
                          {
                            if(e){
                              Alert.alert("User does not exist does not exist; otherwise check internet connection");
                              return;
                            }
                              console.log(e)
                             
                              
                          }    
              
                  
                           }
                           await fetchCompDtls();
              
                          }
              
                          catch (e)
                          {
                            if(e){
                              Alert.alert("User does not exist; otherwise check internet connection");
                              return;
                            }
                              console.log(e)
                             
                              
                          }    
              
                          
                           }
    
                           await fetchUsrDtls();
            } catch (e) {
              console.log(e);
            } finally {
              setLoading(false);
            }
          };
        
          useEffect(() => {
            fetchLoanees();
          }, [])

  return (
    <View style={styles.root}>
      <FlatList
      style= {{width:"100%"}}
        data={Recvrs}
        renderItem={({item}) => <NonLnSent SMAc={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchLoanees}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            
            <Text style={styles.label2}> (Please swipe down to load)</Text>
            <Text style={styles.label}> Money shared among Partners</Text>
          </>
        )}
      />
    </View>
  );
};

export default FetchSMNonLnsSnt;