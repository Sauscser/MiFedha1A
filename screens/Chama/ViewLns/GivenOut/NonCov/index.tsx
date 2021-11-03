import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../../../components/Chama/Loans/Givenout/NonCov";
import styles from './styles';
import { listGroupNonLoanss } from '../../../../../src/graphql/queries';

const FetchSMNonCovLns = props => {

    const[LnerPhn, setLneePhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Loanees, setLoanees] = useState([]);

    const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
              
        setLneePhn(userInfo.attributes.phone_number);
             
      };
      
  
      useEffect(() => {
          fetchUser();
        }, []);

        const fetchLoanees = async () => {
            setLoading(true);
            try {
              const Lonees:any = await API.graphql(graphqlOperation(listGroupNonLoanss, 
                { filter: {
                    and: {
                      loanerPhn: { eq: grpContacts}
                      
                    }
                  }}
                  ));
              setLoanees(Lonees.data.listGroupNonLoanss.items);
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
        data={Loanees}
        renderItem={({item}) => <LnerStts Loanee={item} />}
        onRefresh={fetchLoanees}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            <Text style={styles.label}> My Loanees</Text>
          </>
        )}
      />
    </View>
  );
};

export default FetchSMNonCovLns;