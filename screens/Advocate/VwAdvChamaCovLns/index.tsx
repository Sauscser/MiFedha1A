import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import NonLnSent from "../../../components/Advocate/VwChmCovLns";
import styles from './styles';


import { listCvrdGroupLoanss, listFloatReductions } from '../../../src/graphql/queries';
import { useRoute } from '@react-navigation/core';

const FetchSMNonLnsSnt = props => {

    const[SenderPhn, setSenderPhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Recvrs, setRecvrs] = useState([]);
    const route = useRoute();

    const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
              
        setSenderPhn(userInfo.attributes.phone_number);
             
      };
      
  
      useEffect(() => {
          fetchUser();
        }, []);

        const fetchLoanees = async () => {
            setLoading(true);
            try {
              const Lonees:any = await API.graphql(graphqlOperation(listCvrdGroupLoanss, 
                { filter: {
                    and: {
                      advRegNu: { eq: route.params.AdvReNo},
                      
                      
                    }
                  }}
                  ));
                  setRecvrs(Lonees.data.listCvrdGroupLoanss.items);
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
            
            <Text style={styles.label}> Chama Covered Loans</Text>
            <Text style={styles.label2}> (Please swipe down to load)</Text>
          </>
        )}
      />
    </View>
  );
};

export default FetchSMNonLnsSnt;