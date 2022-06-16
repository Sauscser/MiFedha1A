import React, {useEffect, useState} from 'react';

import {
  
  createSMLoansCovered,
  
  createSMLoansNonCovered,
  
  createNonLoans,
  
  updateCompany,
  
  updateSMAccount,
  updateSMLoansCovered,
  updateSMLoansNonCovered,
  updateNonCovCreditSeller,
  updateBizna,
  
} from '../../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {
  
  getBizna,
  getCompany,
  getCovCreditSeller,
  getNonCovCreditSeller,
  getSMAccount,
  getSMLoansCovered,
  getSMLoansNonCovered,
  
} from '../../../../../../src/graphql/queries';

import {useNavigation, useRoute} from '@react-navigation/native';

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
  ActivityIndicator
} from 'react-native';
import styles from './styles';


const RepayNonCovCredSlsLnsss = props => {
  
  const [SnderPW, setSnderPW] = useState("");
  
  const [amounts, setAmount] = useState("");
  
  const [Desc, setDesc] = useState("");
  const [ownr, setownr] = useState(null);
  const[isLoading, setIsLoading] = useState(false);
  const [SendrEmail, setSendrEmail] = useState(null);
  const route = useRoute();
  
  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setownr(userInfo.attributes.sub);  
    setSendrEmail(userInfo.attributes.email);
  }

  useEffect(() => {
    fetchUser();
    }, []);  


  const fetchSenderUsrDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(false);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {awsemail: SendrEmail}),
      );

      const SenderUsrBal =accountDtl.data.getSMAccount.balance;
      const usrPW =accountDtl.data.getSMAccount.pw;
      const usrAcActvStts =accountDtl.data.getSMAccount.acStatus;
      const TtlClrdLonsTmsByrNonCovs =accountDtl.data.getSMAccount.TtlClrdLonsTmsByrNonCov;
      const TtlActvLonsTmsByrNonCovs =accountDtl.data.getSMAccount.TtlActvLonsTmsByrNonCov;
      const TtlActvLonsAmtByrNonCovs =accountDtl.data.getSMAccount.TtlActvLonsAmtByrNonCov;
      const TtlClrdLonsAmtByrNonCovs =accountDtl.data.getSMAccount.TtlClrdLonsAmtByrNonCov;
      const TtlBLLonsTmsByrNonCovs =accountDtl.data.getSMAccount.TtlBLLonsTmsByrNonCov;
      const TtlBLLonsAmtByrNonCovs =accountDtl.data.getSMAccount.TtlBLLonsAmtByrNonCov;
      const names =accountDtl.data.getSMAccount.name;
      const ttlNonLonsSentSMs =accountDtl.data.getSMAccount.ttlNonLonsSentSM;
      const nonLonLimits =accountDtl.data.getSMAccount.nonLonLimit;
      const MaxTymsBLss =accountDtl.data.getSMAccount.MaxTymsBL;
      
      const fetchCompDtls = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
          const CompDtls:any = await API.graphql(
            graphqlOperation(getCompany, {
              AdminId: "BaruchHabaB'ShemAdonai2",
            }),
          );
          
            
          const UsrTransferFee = CompDtls.data.getCompany.userTransferFee;
          const CompPhoneContact = CompDtls.data.getCompany.phoneContact;  
          const ttlSellerLnsInClrdTymsNonCovs = CompDtls.data.getCompany.ttlSellerLnsInClrdTymsNonCov; 
          const ttlSellerLnsInClrdAmtNonCovs = CompDtls.data.getCompany.ttlSellerLnsInClrdAmtNonCov;
          const ttlSellerLnsInBlTymsNonCovs = CompDtls.data.getCompany.ttlSellerLnsInBlTymsNonCov; 
          const ttlSellerLnsInBlAmtNonCovs = CompDtls.data.getCompany.ttlSellerLnsInBlAmtNonCov;
          const totalLnsRecovereds = CompDtls.data.getCompany.totalLnsRecovered;
          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const ttlNonLonssRecSMs = CompDtls.data.getCompany.ttlNonLonssRecSM;
          const ttlNonLonssSentSMs = CompDtls.data.getCompany.ttlNonLonssSentSM; 
          const maxBLss = CompDtls.data.getCompany.maxBLs;

          const ftchCvdSMLn = async () => {
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try {
                const RecAccountDtl:any = await API.graphql(
                    graphqlOperation(getNonCovCreditSeller, {id: route.params.id}),
                    );
                    const amountExpectedBackWthClrncs =RecAccountDtl.data.getNonCovCreditSeller.amountExpectedBackWthClrnc; 
                    const lonBalas =RecAccountDtl.data.getNonCovCreditSeller.lonBala; 
                    const statuss =RecAccountDtl.data.getNonCovCreditSeller.status;
                    const amountrepaids =RecAccountDtl.data.getNonCovCreditSeller.amountRepaid;
                    const sellerContacts =RecAccountDtl.data.getNonCovCreditSeller.sellerContact; 
                    const buyerNames =RecAccountDtl.data.getNonCovCreditSeller.buyerName; 
                    const SellerNames =RecAccountDtl.data.getNonCovCreditSeller.SellerName; 
                    const LonBalsss = parseFloat(amountExpectedBackWthClrncs) - parseFloat(amountrepaids); 
                    const amountExpectedBacks =RecAccountDtl.data.getNonCovCreditSeller.amountexpectedBack;
                    const ClranceAmt = parseFloat(amountExpectedBackWthClrncs) - parseFloat(amountExpectedBacks); 
                    const DefaultPenaltyCredSl2s =RecAccountDtl.data.getNonCovCreditSeller.DefaultPenaltyCredSl2;
                    const TotalTransacted = parseFloat(amounts)  + parseFloat(UsrTransferFee)*parseFloat(amounts) + ClranceAmt; 
         
                    
          const fetchRecUsrDtls = async () => {
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try {
                const RecAccountDtl:any = await API.graphql(
                    graphqlOperation(getBizna, {BusKntct: sellerContacts}),
                    );
                    const netEarningss =RecAccountDtl.data.getBizna.netEarnings;                  
                    const earningsBalszz =RecAccountDtl.data.getBizna.earningsBal; 
                    
                    
                    const busNamesz =RecAccountDtl.data.getBizna.busName;
                    
                    const updtSendrAcLonOvr1 = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateSMAccount, {
                              input:{
                                awsemail:SendrEmail,
                                
                                balance:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(0) ,
                                
                                MaxTymsBL: 0,                                                                         
                                
                              }
                            })
                          )


                      }
                      catch(error){
                        if (error){Alert.alert("Check your internet connection")
                        return;}
                      }
                      setIsLoading(false);
                      await updtSMCvLnLnOver();
                    }

                    const updtSendrAcLonOvr2 = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateSMAccount, {
                              input:{
                                awsemail:SendrEmail,
                                
                                balance:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(0) ,
                                
                                MaxTymsBL: parseFloat(MaxTymsBLss) - 1,                                                                         
                                
                              }
                            })
                          )


                      }
                      catch(error){
                        if (error){Alert.alert("Check your internet connection")
                        return;}
                      }
                      setIsLoading(false);
                      await updtSMCvLnLnOver();
                    }

                              const updtSMCvLnLnOver  = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateNonCovCreditSeller, {
                                        input:{
                                          id:route.params.id,
                                          amountRepaid: (parseFloat(amounts) + parseFloat(amountrepaids)).toFixed(0),
                                          lonBala: (parseFloat(lonBalas)-parseFloat(amounts)).toFixed(0),
                                          amountExpectedBackWthClrnc:(parseFloat(amountExpectedBackWthClrncs) - ClranceAmt).toFixed(0),
                                          status: "LoanCleared",
                                          DefaultPenaltyCredSl2:0
                                      }})
                                    )
          
          
                                }
                                catch(error){
                                  if (error){Alert.alert("Check your internet connection")
                                  return;}
                                }
                                setIsLoading(false);
                                await sendNonLnLnOver();
                              }
                              
                              const sendNonLnLnOver = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true)
                                try {
                                  await API.graphql(
                                    graphqlOperation(createNonLoans, {
                                      input: {
                                        senderPhn: SendrEmail,
                                        recPhn: sellerContacts,  
                                        RecName:SellerNames,   
                                        SenderName:buyerNames,                             
                                        amount: parseFloat(amounts).toFixed(0),                              
                                        description: Desc,
                                        status: "CredSlrLonRepayment",
                                        owner: ownr
                                      },
                                    }),
                                  );
          
          
                                } catch (error) {
                                  if(!error){
                                    Alert.alert("Account deactivated successfully")
                                    
                                } 
                                else{Alert.alert("Please check your internet connection")
                                return;}
                                }
                                setIsLoading(false);
                                await updtRecAcLonOver();
                              };
          
                              
          
                              const updtRecAcLonOver = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateBizna, {
                                        input:{
                                          BusKntct:sellerContacts,
                                          netEarnings: (parseFloat(netEarningss) + (parseFloat(amounts) + parseFloat(DefaultPenaltyCredSl2s))).toFixed(0),
                                          earningsBal: (parseFloat(earningsBalszz) + (parseFloat(amounts) + parseFloat(DefaultPenaltyCredSl2s))).toFixed(0),
                                         
                                        }
                                      })
                                    )                              
                                }
                                catch(error){
                                  if (error){Alert.alert("Check your internet connection")
                                  return;}
                                }
                                setIsLoading(false);
                                await updtCompLnOvr();
                              }
          
                              const updtCompLnOvr = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCompany, {
                                        input:{
                                          AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                         
                                          companyEarningBal:UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarningBals) + ClranceAmt - parseFloat(DefaultPenaltyCredSl2s),
                                          companyEarning: UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarnings) + ClranceAmt - parseFloat(DefaultPenaltyCredSl2s),                                                    
                                          
                                          totalLnsRecovered: parseFloat(totalLnsRecovereds) + parseFloat(amounts) ,
                                          ttlSellerLnsInClrdAmtNonCov: parseFloat(ttlSellerLnsInClrdAmtNonCovs) + parseFloat(amounts) ,
                                          ttlSellerLnsInClrdTymsNonCov: parseFloat(ttlSellerLnsInClrdTymsNonCovs) + 1 ,
                                          
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  
                                }
                                Alert.alert("Cleared. Clearance charge: " +ClranceAmt.toFixed(2) + " Transaction: "+ (parseFloat(UsrTransferFee)*parseFloat(amounts)).toFixed(2));
                                setIsLoading(false);
                              }                                                                                                            
                        

                              const repyCovLn = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateNonCovCreditSeller, {
                                        input:{
                                          id:route.params.id,
                                          DefaultPenaltyCredSl2:0,
                                          amountRepaid: (parseFloat(amounts) + parseFloat(amountrepaids)).toFixed(0),
                                          lonBala: (parseFloat(lonBalas) - parseFloat(amounts)).toFixed(0),
                                          amountExpectedBackWthClrnc:(parseFloat(amountExpectedBackWthClrncs) - ClranceAmt).toFixed(0),
                                        }
                                      })
                                    )
          
          
                                }
                                catch(error){
                                  if (error){Alert.alert("Check your internet connection")
                                  return;}
                                }
                                setIsLoading(false);
                                await sendCovLn();
                              }
                              
                              const sendCovLn = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true)
                                try {
                                  await API.graphql(
                                    graphqlOperation(createNonLoans, {
                                      input: {
                                        recPhn: sellerContacts,
                                        senderPhn: SendrEmail, 
                                        RecName:SellerNames,
                                        SenderName:buyerNames ,                                
                                        amount: parseFloat(amounts).toFixed(0),                              
                                        description: Desc,
                                        status: "CredSlrLonRepayment",
                                        owner: ownr
                                      },
                                    }),
                                  );
          
          
                                } catch (error) {
                                  if(!error){
                                    Alert.alert("Account deactivated successfully")
                                    
                                } 
                                else{Alert.alert("Please check your internet connection")
                                return;}
                                }
                                setIsLoading(false);
                                await updtSendrAc();
                              };
          
                              const updtSendrAc = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMAccount, {
                                        input:{
                                          awsemail:SendrEmail,
                                          
                                          balance:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(0),
                                          
                                        }
                                      })
                                    )
          
          
                                }
                                catch(error){
                                  if (error){Alert.alert("Check your internet connection")
                                  return;}
                                }
                                setIsLoading(false);
                                await updtRecAc();
                              }
          
                              const updtRecAc = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateBizna, {
                                        input:{
                                          BusKntct:sellerContacts,
                                          netEarnings: (parseFloat(netEarningss) + (parseFloat(amounts) + parseFloat(DefaultPenaltyCredSl2s))).toFixed(0),
                                          earningsBal: (parseFloat(earningsBalszz) + (parseFloat(amounts) + parseFloat(DefaultPenaltyCredSl2s))).toFixed(0),
                                         
                                        }
                                      })
                                    )                              
                                }
                                catch(error){
                                  if (error){Alert.alert("Check your internet connection")
                                  return;}
                                }
                                setIsLoading(false);
                                await updtComp();
                              }
          
                              const updtComp = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCompany, {
                                        input:{
                                          AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                          ttlSellerLnsInClrdAmtNonCov: parseFloat(ttlSellerLnsInClrdAmtNonCovs) + parseFloat(amounts) ,
                                          companyEarningBal:UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarningBals) + ClranceAmt - parseFloat(DefaultPenaltyCredSl2s),
                                          companyEarning: UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarnings) + ClranceAmt - parseFloat(DefaultPenaltyCredSl2s),                                                    
                                          totalLnsRecovered: parseFloat(totalLnsRecovereds) + parseFloat(amounts) ,
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  
                                }
                                Alert.alert("Partially paid. Clearance: " +(ClranceAmt).toFixed(2) + " Transaction: "+ (parseFloat(UsrTransferFee)*parseFloat(amounts)).toFixed(2));
                                setIsLoading(false);
                              }

                                                          
                                                    
                              
                              if(usrAcActvStts === "AccountInactive"){Alert.alert('Sender account is inactive');
                              return;
                            }
                              
                              else if (
                                parseFloat(SenderUsrBal) < TotalTransacted 
                              ) {Alert.alert('Requested amount is more than you have in your account');
                            return;
                          }
                          
                              else if(usrPW !==SnderPW){Alert.alert('Wrong password');
                            return;
                          }
                              
                              
                              else if(parseFloat(nonLonLimits) < parseFloat(amounts)){Alert.alert('Call ' + CompPhoneContact + ' to have your send Amount limit adjusted');
                            return;
                          }

                          else if(parseFloat(amounts) > parseFloat(lonBalas)){Alert.alert("Your Loan Balance is lesser: "+lonBalas)}
                          

                          else if(ClranceAmt > parseFloat(amounts) ){Alert.alert( "Too little repayment: at least "+ClranceAmt.toFixed(2));
                            return;
                          }
                          
                          else if(parseFloat(amounts) === parseFloat(lonBalas)  && parseFloat(MaxTymsBLss) === parseFloat(maxBLss) )
                          {updtSendrAcLonOvr1();}          
                          
                          else if(parseFloat(amounts) === parseFloat(lonBalas)  && parseFloat(MaxTymsBLss) > parseFloat(maxBLss) )
                          {updtSendrAcLonOvr2();} 
                              
                               else {
                                repyCovLn();
                              }
                          }
                          catch (e) {
                            if (e){Alert.alert("There is no such a loan")
                            return;}
                        };
                      }
                    
                      await fetchRecUsrDtls();
                                                                                         
                }       
                catch(e) {     
                  if (e){Alert.alert("Reciever does not exist")
  return;}                 
                }
                setIsLoading(false);
                }                    
                  await ftchCvdSMLn ();
        } catch (e) {
          if (e){Alert.alert("Check your internet connection")
      return;}
        }
        setIsLoading(false);        
      };
      await fetchCompDtls  ();
    
      
    } catch (e) {
      if (e){Alert.alert("Sender does not exist")
      return;}
  };
      setIsLoading(false);
      
      setAmount("");
      
      setDesc("");
      setSnderPW("");
      
      
}



     useEffect(() =>{
      const amt=amounts
        if(!amt && amt!=="")
        {
          setAmount("");
          return;
        }
        setAmount(amt);
        }, [amounts]
         );

        
                     useEffect(() =>{
                      const descr=Desc
                        if(!descr && descr!=="")
                        {
                          setDesc("");
                          return;
                        }
                        setDesc(descr);
                        }, [Desc]
                         );

                         useEffect(() =>{
                          const SnderPWss=SnderPW
                            if(!SnderPWss && SnderPWss!=="")
                            {
                              setSnderPW("");
                              return;
                            }
                            setSnderPW(SnderPWss);
                            }, [SnderPW]
                             );

                            

  return (
    <View>
      <View
        
        style={styles.image}>
        <ScrollView>
         
          <View style={styles.amountTitleView}>
            <Text style={styles.title}>Fill account Details Below</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
            keyboardType={"decimal-pad"}
              value={amounts}
              onChangeText={setAmount}
              style={styles.sendAmtInput}
              editable={true}
              ></TextInput>
              
            <Text style={styles.sendAmtText}>Amount Sent</Text>
          </View>


          <View style={styles.sendAmtView}>
            <TextInput
              value={SnderPW}
              onChangeText={setSnderPW}
              secureTextEntry = {true}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Loanee PassWord</Text>
          </View>

          <View style={styles.sendAmtViewDesc}>
            <TextInput
              multiline={true}
              value={Desc}
              onChangeText={setDesc}
              style={styles.sendAmtInputDesc}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Description</Text>
          </View>
          
          

          <TouchableOpacity
            onPress={fetchSenderUsrDtls}
            style={styles.sendAmtButton}>
            <Text style={styles.sendAmtButtonText}>Send</Text>
            {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
          </TouchableOpacity>

          
        </ScrollView>
      </View>
    </View>
  );
};
export default RepayNonCovCredSlsLnsss;