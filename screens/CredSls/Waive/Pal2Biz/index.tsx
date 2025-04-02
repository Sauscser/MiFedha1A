import React, {useEffect, useState} from 'react';



import {API, Auth, graphqlOperation} from 'aws-amplify';


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
import { getBizna, getCompany, getCovCreditSeller, getSMAccount } from '../../../../src/graphql/queries';
import { createLoanRepayments, updateBizna, updateCompany, updateCovCreditSeller, updateSMAccount } from '../../../../src/graphql/mutations';



const RepayCovSellerLnsss = props => {
  
  const [SnderPW, setSnderPW] = useState("");
  
  const [amounts, setAmount] = useState("");
  
  const [Desc, setDesc] = useState("");
  
  const[isLoading, setIsLoading] = useState(false);
  
  
  const route = useRoute();
  

  

  
      const ftchCvdSMLn = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
            const RecAccountDtl:any = await API.graphql(
                graphqlOperation(getCovCreditSeller, {loanID: route.params.loanID}),
                );
                
                const amountExpectedBackWthClrncs =RecAccountDtl.data.getCovCreditSeller.amountExpectedBackWthClrnc; 
                const lonBalas =RecAccountDtl.data.getCovCreditSeller.lonBala; 
                const statuss =RecAccountDtl.data.getCovCreditSeller.status; 
                const amountrepaids =RecAccountDtl.data.getCovCreditSeller.amountRepaid; 
                const sellerContacts =RecAccountDtl.data.getCovCreditSeller.sellerContact; 
                const buyerNames =RecAccountDtl.data.getCovCreditSeller.buyerName; 
                const SellerNames =RecAccountDtl.data.getCovCreditSeller.SellerName; 
                const buyerContact =RecAccountDtl.data.getCovCreditSeller.buyerContact; 
                const amountExpectedBacks =RecAccountDtl.data.getCovCreditSeller.amountexpectedBack;
                const amountRepaidss =RecAccountDtl.data.getCovCreditSeller.amountRepaid; 
                const crtnDate =RecAccountDtl.data.getCovCreditSeller.crtnDate; 
                const dfltUpdate =RecAccountDtl.data.getCovCreditSeller.dfltUpdate; 
                const repaymentPeriod =RecAccountDtl.data.getCovCreditSeller.repaymentPeriod;
                const amountSold =RecAccountDtl.data.getCovCreditSeller.amountSold; 
                const interest =RecAccountDtl.data.getCovCreditSeller.interest; 
                const LonBalsss = parseFloat(amountExpectedBackWthClrncs) - parseFloat(amountRepaidss); 
                const clearanceAmts =RecAccountDtl.data.getCovCreditSeller.clearanceAmt;             
                const DefaultPenaltyCredSl2s =RecAccountDtl.data.getCovCreditSeller.DefaultPenaltyCredSl2;             
                const ClranceAmt = parseFloat(clearanceAmts) + parseFloat(DefaultPenaltyCredSl2s)
      
             
              const today = new Date();
              let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
              let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
              let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
              let years = (today.getFullYear() < 10 ? '0' : '') + today.getFullYear();
              let months = (today.getMonth() < 10 ? '0' : '') + today.getMonth();
              let months2 = parseFloat(months)
              let days = (today.getDate() < 10 ? '0' : '') + today.getDate();
              
              const now:any = years+ "-"+ "0"+months2 +"-"+ days+"T"+hours + ':' + minutes + ':' + seconds;

              const now1:any = "2024-05-20";
             
              
              
              
              
              
             

        
              const curYrs = parseFloat(years)*365;
              const curMnths = (months2)*30.4375;
              const daysUpToDate = curYrs + curMnths + parseFloat(days)

             

              const tmDif = daysUpToDate - dfltUpdate;
              const tmDif2 = daysUpToDate - crtnDate;


              const netLnBal = parseFloat(amountExpectedBackWthClrncs) - 
              parseFloat(clearanceAmts) - parseFloat (DefaultPenaltyCredSl2s)
      
              const netLnBal2 = (netLnBal) * 
              ((Math.pow(1 + parseFloat(interest)/36500, tmDif2)))

              const LonBal1 = (netLnBal2 + parseFloat(clearanceAmts) + parseFloat (DefaultPenaltyCredSl2s)).toFixed(0)

              const LoanBalz = parseFloat(LonBal1) - parseFloat(amounts)

             



              const fetchLoanerDtls = async () => {
                if(isLoading){
                  return;
                }
                setIsLoading(false);
                const userInfo = await Auth.currentAuthenticatedUser();
               
                try {
                  const accountDtl:any = await API.graphql(
                    graphqlOperation(getSMAccount, {awsemail: sellerContacts}),
                  );
            
                  const SenderUsrBal =accountDtl.data.getSMAccount.balance;
                  const usrPW =accountDtl.data.getSMAccount.pw;
                  const usrAcActvStts =accountDtl.data.getSMAccount.acStatus;
                  const owner =accountDtl.data.getSMAccount.owner;
                  const TtlActvLonsTmsByrCovs =accountDtl.data.getSMAccount.TtlActvLonsTmsByrCov;
                  const TtlActvLonsAmtByrCovs =accountDtl.data.getSMAccount.TtlActvLonsAmtByrCov;
                  const TtlClrdLonsAmtByrCovs =accountDtl.data.getSMAccount.TtlClrdLonsAmtByrCov;
                  const TtlBLLonsTmsByrCovs =accountDtl.data.getSMAccount.TtlBLLonsTmsByrCov;
                  const TtlBLLonsAmtByrCovs =accountDtl.data.getSMAccount.TtlBLLonsAmtByrCov;
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
          
            
          const UsrTransferFee = CompDtls.data.getCompany.crdSllrLnRpymntFee;
          const CompPhoneContact = CompDtls.data.getCompany.phoneContact;  
          const ttlSellerLnsInClrdTymsCovs = CompDtls.data.getCompany.ttlSellerLnsInClrdTymsCov; 
          const ttlSellerLnsInClrdAmtCovs = CompDtls.data.getCompany.ttlSellerLnsInClrdAmtCov;
          const ttlSellerLnsInBlTymsCovs = CompDtls.data.getCompany.ttlSellerLnsInBlTymsCov; 
          const ttlSellerLnsInBlAmtCovs = CompDtls.data.getCompany.ttlSellerLnsInBlAmtCov;
          const totalLnsRecovereds = CompDtls.data.getCompany.totalLnsRecovered;
          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const ttlNonLonssRecSMs = CompDtls.data.getCompany.ttlNonLonssRecSM;
          const ttlNonLonssSentSMs = CompDtls.data.getCompany.ttlNonLonssSentSM; 
          const TotalTransacted = parseFloat(amounts)  + parseFloat(UsrTransferFee)*parseFloat(amounts) + ClranceAmt; 
          const maxBLss = CompDtls.data.getCompany.maxBLs;
         
                    
          const fetchLoaneeDtls = async () => {
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try {
                const RecAccountDtl:any = await API.graphql(
                    graphqlOperation(getBizna, {BusKntct: buyerContact}),
                    );
                    const netEarnings2 =RecAccountDtl.data.getBizna.netEarnings;                    
                    const earningsBal2 =RecAccountDtl.data.getBizna.earningsBal; 
                    
                    const noBL =RecAccountDtl.data.getBizna.noBL;

                    const busName2 =RecAccountDtl.data.getBizna.busName;
                   
                    
                    const updtSendrAcLonOvr1 = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateBizna, {
                              input:{
                                BusKntct: buyerContact,
                                
                                noBL: 0, 
                                 
                              }
                            })
                          )


                      }
                      catch(error){
                        console.log(error)
                        if (error){
                          Alert.alert("Waived unsuccessful; Retry")
                          return
                        }
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
                            graphqlOperation(updateBizna, {
                              input:{
                                BusKntct: buyerContact,
                                
                                noBL: parseFloat(noBL) - 1, 
                              }
                            })
                          )


                      }
                      catch(error){
                        if (error){
                          Alert.alert("Waived unsuccessful; Retry")
                          return
                        }
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
                                      graphqlOperation(updateCovCreditSeller, {
                                        input:{
                                          loanID:route.params.loanID,
                                          amountRepaid: (parseFloat(amounts) + parseFloat(amountrepaids)).toFixed(0),
                                          lonBala: LoanBalz.toFixed(0),
                                          amountExpectedBackWthClrnc:LoanBalz.toFixed(0),
                                          status: "LoanCleared",
                                          DefaultPenaltyCredSl2:0,
                                          clearanceAmt: 0
                                      }})
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Retry or update app or call customer care")
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
                                    graphqlOperation(createLoanRepayments, {
                                      input: {
                                        senderPhn: buyerContact,
                                        recPhn: sellerContacts,    
                                        RecName:SellerNames,
                                        loanId2: route.params.loanID,  
                                        loanId1: "route.params.id",                                        
                                        loanId3: "route.params.id", 
                                        SenderName:buyerNames,                             
                                        amount: parseFloat(amounts).toFixed(0),                              
                                        description: Desc,
                                        status: "Waived",
                                        owner: userInfo.attributes.sub
                                      },
                                    }),
                                  );
          
          
                                } catch (error) {
                                  if (error){
                                    Alert.alert("Waiver unsuccessful; Retry")
                                    return
                                  }
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
                                      graphqlOperation(updateSMAccount, {
                                        input:{
                                          awsemail:sellerContacts,
                                          
                                        }
                                      })
                                    )                              
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Retry or update app or call customer care")
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
                                         
                                          
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  if (error){
                                    Alert.alert("Waiver unsuccessful; Retry")
                                    return
                                  }
                                }
                                Alert.alert("Cleared. ");
                                setIsLoading(false);
                              }                                                                                                            
                        

                              const repyCovLn = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCovCreditSeller, {
                                        input:{
                                          loanID:route.params.loanID,
                                          amountRepaid: (parseFloat(amounts) + parseFloat(amountrepaids)).toFixed(0),
                                          lonBala: LoanBalz.toFixed(0),
                                          DefaultPenaltyCredSl2:0,
                                          amountExpectedBackWthClrnc:LoanBalz.toFixed(0),
                                          clearanceAmt: 0
                                        }
                                      })
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Retry or update app or call customer care")
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
                                    graphqlOperation(createLoanRepayments, {
                                      input: {
                                        recPhn: sellerContacts,
                                        senderPhn: buyerContact, 
                                        RecName:SellerNames,
                                        loanId2: route.params.loanID, 
                                        loanId1: "route.params.id",                                        
                                        loanId3: "route.params.id",  
                                        SenderName:buyerNames,                                    
                                        amount: parseFloat(amounts).toFixed(0),                              
                                        description: Desc,
                                        status: "Waived",
                                        owner: userInfo.attributes.sub
                                      },
                                    }),
                                  );
          
          
                                } catch (error) {
                                  console.log(error)
                                  if (error){
                                    Alert.alert("Waiver unsuccessful; Retry")
                                    return
                                  }
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
                                      graphqlOperation(updateBizna, {
                                        input:{
                                            BusKntct: buyerContact,
                                
                                          
                                        }
                                      })
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Retry or update app or call customer care")
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
                                      graphqlOperation(updateSMAccount, {
                                        input:{
                                          awsemail:sellerContacts,
                                          
                                        }
                                      })
                                    )                              
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Retry or update app or call customer care")
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
                                          
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  if (error){
                                    Alert.alert("Waiver unsuccessful; Retry")
                                    return
                                  }
                                  
                                }
                                Alert.alert("Partially waived.");
                                setIsLoading(false);
                              }

                                                          
                                                    
                              
                              if (userInfo.attributes.sub!==owner) {
                                Alert.alert("Please first create a main account")
                                return;
                              }  
                              

                          else if(ClranceAmt > parseFloat(amounts) ){Alert.alert( "Too little amount waived: at least "+ClranceAmt.toFixed(2));
                            return;
                          }

                          else if(parseFloat(amounts) > parseFloat(LonBal1)){Alert.alert("The Loan Balance is lesser: "+LonBal1)}
                          

                          else if((parseFloat(amounts) === parseFloat(LonBal1))  && (parseFloat(noBL) === parseFloat(maxBLss)) )
                          {updtSendrAcLonOvr1();}          
                          
                          else if((parseFloat(amounts) === parseFloat(LonBal1))  && (parseFloat(noBL) > parseFloat(maxBLss)))
                          {updtSendrAcLonOvr2();}        
                              
                               else {
                                repyCovLn();
                              }
                          }
                          catch (e) {
                            if (e){console.log(e)
                              Alert.alert("Retry or update app or call customer care")
                            return;}
                        };
                      }
                    
                      await fetchLoaneeDtls();
                                                                                         
                }       
                catch(e) {     
                  if (e){Alert.alert("Retry or update app or call customer care")
  return;}                 
                }
                setIsLoading(false);
                }                    
                  await fetchCompDtls ();
        } catch (e) {
          console.log(e)
          if (e){Alert.alert("Retry or update app or call customer care")
      return;}
        }
        setIsLoading(false);        
      };
      await fetchLoanerDtls ();
    
      
    } catch (e) {
      if (e){Alert.alert("Retry or update app or call customer care")
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
              
            <Text style={styles.sendAmtText}>Amount Waived</Text>
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
            onPress={ftchCvdSMLn}
            style={styles.sendAmtButton}>
            <Text style={styles.sendAmtButtonText}>Waive</Text>
            {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
          </TouchableOpacity>

          
        </ScrollView>
      </View>
    </View>
  );
};
export default RepayCovSellerLnsss;