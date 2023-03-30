import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList, Alert} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';

import styles from './styles';
import { getCompany, getExRates, getSMAccount, listSMAccounts } from '../../../src/graphql/queries';
import { useNavigation } from '@react-navigation/native';

const FetchSMNonCovLns = props => {

    const[LneePhn, setLneePhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Loanees, setLoanees] = useState([]);
    const [sellingPrice, setsellingPrice] = useState();
    const [Recom, setRecom] = useState();
    const [Cur, setCur] = useState();
    const[isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();

    const PyPlDpst = () => {
      navigation.navigate("PayPalDposit");
    }

    const PyPlDpst2 = () => {
      navigation.navigate("Homeie");
    }
    

        const fetchLoanees = async () => {
            setLoading(true);
            const userInfo = await Auth.currentAuthenticatedUser();
            try {
              const Lonees:any = await API.graphql(graphqlOperation(listSMAccounts, 
                { filter: {
                    and: {
                      awsemail: { eq: userInfo.attributes.email},
                     
                    }
                  }}
                  ));
              setLoanees(Lonees.data.listSMAccounts.items);

              const gtExchangeRt = async () =>{
                if(isLoading){
                    return;
                }
                setIsLoading(true)
                try{
                  const compDtlsz:any = await API.graphql(
                  graphqlOperation(getSMAccount,{awsemail:userInfo.attributes.email})
                    );
                    const nationality = compDtlsz.data.getSMAccount.nationality; 


                      const gtExchangeRt2 = async () =>{
                        if(isLoading){
                            return;
                        }
                        setIsLoading(true)
                        try{
                          const compDtls:any = await API.graphql(
                          graphqlOperation(getExRates,{cur:nationality})
                            );
                            setsellingPrice(compDtls.data.getExRates.sellingPrice)
                            setCur(compDtls.data.getExRates.symbol)
                            const Cur2 = compDtls.data.getExRates.symbol

                              const gtCompDtls = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                  const compDtlszx:any= await API.graphql(
                                    graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                                    );
                                    
                                    setRecom(compDtlszx.data.getCompany.PayPalTNC);
                              
        
                                  } catch (error) {
                                    console.log(error)
                                if (error){Alert.alert("Error")
                                        return;}
                                  }
                                  setIsLoading(false);
                                  };    
                      
                                  await gtCompDtls(); 
        
                            } catch (error) {
                                console.log(error)
                            if (error){Alert.alert("Error")
                                    return;}
                              }
                              setIsLoading(false);
                              };    
                  
                              await gtExchangeRt2(); 
        



                    } catch (error) {
                        console.log(error)
                    if (error){Alert.alert("Error")
                            return;}
                      }
                      setIsLoading(false);
                      };    
          
                      await gtExchangeRt(); 

              


            } catch (e) {
              console.log(e);
            } finally {
              setLoading(false);
              
          };
        }
          


useEffect(() => {
  fetchLoanees();
}, [])   

  return (
   

<View style = {{marginTop:"10%"}}>

                  
                       
<View >
<Text style = {styles.ownerName}>                       
 {/*loaner details */}   

 
Our exchange rates are {Cur}. {sellingPrice}. {Recom}
</Text>
</View>  

<View style = {styles.viewForPressables2}>
<View>
<Pressable
onPress={PyPlDpst}
style = {styles.loanFriendButton}
>            
  <Text>Proceed</Text>            
</Pressable>
</View>   
<View>
<Pressable
onPress={PyPlDpst2}
style = {styles.loanFriendButton}>            
  <Text>Return</Text>            
</Pressable>  
</View>

</View>



</View>
      
   
  );
};

export default FetchSMNonCovLns;