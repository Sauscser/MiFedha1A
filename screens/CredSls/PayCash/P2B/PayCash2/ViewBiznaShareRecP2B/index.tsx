import React, {useState, useEffect} from 'react';
import {View, Text,   FlatList, Alert} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import NonLnRec from "../../../../../../components/MyAc/ViewRecNonLns";
import styles from './styles';
import { listNonLoans,   listPersonels,   } from '../../../../../../src/graphql/queries';
import { updateCompany, updateSMAccount } from '../../../../../../src/graphql/mutations';
import { TextInput } from 'react-native-gesture-handler';

const FetchSMNonLnsSnt = props => {

    
    const [loading, setLoading] = useState(false);
    const [Recvrs, setRecvrs] = useState([]);
    const [itemPrys, setitemPrys] = useState('');
    const[isLoading, setIsLoading] = useState(false);
   
    

        const fetchLoanees = async () => {
            
        if(isLoading){
          return;
        }
        setIsLoading(true);
      
        const userInfo = await Auth.currentAuthenticatedUser();
            try {
              const Lonees:any = await API.graphql(graphqlOperation(listPersonels, 
              {
                filter: {
                  
                  phoneKontact: { eq: userInfo.attributes.email},
                  BusinessRegNo:{eq: itemPrys}
                                
                  }
                    }
               
                  ));
                  
                  
                  const fetchLoanees2 = async () => {
            
                    if(isLoading){
                      return;
                    }
                    setIsLoading(true);
                  
                    const userInfo = await Auth.currentAuthenticatedUser();
                        try {
                          const Lonees:any = await API.graphql(graphqlOperation(listNonLoans, 
                          {
                            
                            filter:
                            {recPhn:{eq:itemPrys }  , },
                                                                    
                            sortDirection: 'DESC',
                            limit: 100,
                                }
                           
                              ));
                              setRecvrs(Lonees.data.listNonLoans.items);
                   
                        } catch (e) {
                          console.log(e);
                        } finally {
                          setIsLoading(false);
                          
                        }
                      };   
                            
                              
              
                      if(parseFloat(Lonees.data.listPersonels.items.length) < 1 )
                      {
                          Alert.alert("Retry if sure you work here");
                          return;
                        }
                        else{
                            
                          await fetchLoanees2();
                            }
                            
                              
                         
            } catch (e) {
              console.log(e);
            } finally {
              setIsLoading(false);
              setitemPrys("")
            }
          };
        
          useEffect(() => {
            fetchLoanees();
          }, [])

  return (

    <View style={styles.image}>
    <View style={styles.root}>
      <FlatList
      style= {{width:"100%"}}
        data={Recvrs}
        renderItem={({item}) => <NonLnRec SMAc={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchLoanees}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            
            <Text style={styles.label2}> (Please swipe down to load)</Text>
            <Text style={styles.label}> Money received from Individuals</Text>
          </>
        )}
      />
    </View>
    <View style={styles.sendLoanView}>
                    <TextInput
                       placeholder='Enter Business Phone'
                      value={itemPrys}
                      onChangeText={setitemPrys}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
             
    </View>
    </View>
  );
};

export default FetchSMNonLnsSnt;