import React, {useEffect, useState} from 'react';

import {
  
  createSMLoansCovered,
  
  createSMLoansNonCovered,
  
  createNonLoans,
  
  updateCompany,
  
  updateSMAccount,
  updateSMLoansCovered,
  updateCvrdGroupLoans,
  updateGroup,
  updateGrpMembers,
  
} from '../../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {
  
  getCompany,
  getCvrdGroupLoans,
  getGroup,
  getGrpMembers,
  getSMAccount,
  getSMLoansCovered,
  
} from '../../../../../../src/graphql/queries';

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
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import styles from './styles';


const RepayNonCovChmLnsss = props => {
  const [SenderNatId, setSenderNatId] = useState('');
  
  const [SnderPW, setSnderPW] = useState("");
  
  const [amounts, setAmount] = useState("");
  const[LnId, setLnId] = useState("")
  const [Desc, setDesc] = useState("");
  const [ownr, setownr] = useState(null);
  const[isLoading, setIsLoading] = useState(false);
  const [SendrPhn, setSendrPhn] = useState(null);
  
  

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setownr(userInfo.attributes.sub);  
    setSendrPhn(userInfo.attributes.phone_number);
  }

  useEffect(() => {
    fetchUser();
    }, []);  


    const ftchCvdSMLn = async () => {
      if(isLoading){
        return;
      }
      setIsLoading(true);
      try {
          const RecAccountDtl:any = await API.graphql(
              graphqlOperation(getCvrdGroupLoans, {id: LnId}),
              );
              
              const amountexpecteds =RecAccountDtl.data.getCvrdGroupLoans.amountExpectedBack; 
              const memberIds =RecAccountDtl.data.getCvrdGroupLoans.memberId;

              const grpContactssss =RecAccountDtl.data.getCvrdGroupLoans.grpContact; 
              const loaneePhnssss =RecAccountDtl.data.getCvrdGroupLoans.loaneePhn;
               
              const amountrepaids =RecAccountDtl.data.getCvrdGroupLoans.amountRepaid; 
              const LonBal = parseFloat(amountexpecteds) - parseFloat(amountrepaids); 
              

  const fetchSenderUsrDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(false);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {phonecontact: loaneePhnssss}),
      );

      const SenderUsrBal =accountDtl.data.getSMAccount.balance;
      const usrPW =accountDtl.data.getSMAccount.pw;
      const usrAcActvStts =accountDtl.data.getSMAccount.acStatus;
      const TtlClrdLonsTmsLneeChmCovs =accountDtl.data.getSMAccount.TtlClrdLonsTmsLneeChmCov;
      const TtlActvLonsTmsLneeChmCovs =accountDtl.data.getSMAccount.TtlActvLonsTmsLneeChmCov;
      const TtlActvLonsAmtLneeChmCovs =accountDtl.data.getSMAccount.TtlActvLonsAmtLneeChmCov;
      const TtlClrdLonsAmtLneeChmCovs =accountDtl.data.getSMAccount.TtlClrdLonsAmtLneeChmCov;
      const TtlBLLonsTmsLneeChmCovs =accountDtl.data.getSMAccount.TtlBLLonsTmsLneeChmCov;
      const TtlBLLonsAmtLneeChmCovs =accountDtl.data.getSMAccount.TtlBLLonsAmtLneeChmCov;
      const names =accountDtl.data.getSMAccount.name;
      
      const nonLonLimits =accountDtl.data.getSMAccount.nonLonLimit;
      const MaxTymsBLss =accountDtl.data.getSMAccount.MaxTymsBLs;
      
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
          const ttlChmLnsInClrdTymsCovs = CompDtls.data.getCompany.ttlChmLnsInClrdTymsCov; 
          const ttlChmLnsInClrdAmtCovs = CompDtls.data.getCompany.ttlChmLnsInClrdAmtCov;
          const ttlChmLnsInBlTymsCovs = CompDtls.data.getCompany.ttlChmLnsInBlTymsCov; 
          const ttlChmLnsInBlAmtCovs = CompDtls.data.getCompany.ttlChmLnsInBlAmtCov;
          const ttlChmLnsInActvAmtCov = CompDtls.data.getCompany.ttlChmLnsInActvAmtCov;
          const ttlChmLnsInActvTymsCov = CompDtls.data.getCompany.ttlChmLnsInActvTymsCov;
          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
         
          const TotalTransacted = parseFloat(amounts)  + parseFloat(UsrTransferFee)*parseFloat(amounts); 

         
                    
          const fetchRecUsrDtls = async () => {
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try {
                const RecAccountDtl:any = await API.graphql(
                    graphqlOperation(getGroup, {grpContact: grpContactssss}),
                    );
                    const RecUsrBal =RecAccountDtl.data.getGroup.grpBal;                    
                    const usrAcActvSttss =RecAccountDtl.data.getGroup.status; 
                   
                    const tymsChmHvBLs =RecAccountDtl.data.getGroup.tymsChmHvBL;                    
                    const TtlClrdLonsTmsLnrChmCovs =accountDtl.data.getGroup.TtlClrdLonsTmsLnrChmCov;
                    const TtlClrdLonsAmtLnrChmCovs =accountDtl.data.getGroup.TtlClrdLonsAmtLnrChmCov;
                    const TtlBLLonsTmsLnrChmCovs =accountDtl.data.getGroup.TtlBLLonsTmsLnrChmCov;
                    const TtlBLLonsAmtLnrChmCovs =accountDtl.data.getGroup.TtlBLLonsAmtLnrChmCov;
                    const namess =accountDtl.data.getGroup.grpName;
                    const TtlActvLonsTmsLnrChmCovs =accountDtl.data.getGroup.TtlActvLonsTmsLnrChmCov;
                    const TtlActvLonsAmtLnrChmCovs =accountDtl.data.getGroup.TtlActvLonsAmtLnrChmCov;
                    
                    

                    
                              
                              const fetchMmbrDtls = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try {
                                    const RecAccountDtl:any = await API.graphql(
                                        graphqlOperation(getGrpMembers, {id: memberIds}),
                                        );
                                        
                                        const AmtRepaids =RecAccountDtl.data.getGrpMembers.AmtRepaid;
                                        const LnBals =RecAccountDtl.data.getGrpMembers.LnBal;
                                         
                                        
                                        const updtChmMbrTTlBlOvr  = async () =>{
                                          if(isLoading){
                                            return;
                                          }
                                          setIsLoading(true);
                                          try{
                                              await API.graphql(
                                                graphqlOperation(updateGrpMembers, {
                                                  input:{
                                                    id:memberIds,
                                                    AmtRepaid: parseFloat(AmtRepaids)+parseFloat(amounts) ,
                                                    LnBal: parseFloat(LnBals)-parseFloat(amounts) ,
                                                    loanStatus: "LoanCleared",
                                                    blStatus: "AccountNotBL",
                                                }})
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
                                      graphqlOperation(updateCvrdGroupLoans, {
                                        input:{
                                          id:LnId,
                                          amountRepaid: parseFloat(amounts) + parseFloat(amountrepaids),
                                          lonBala: LonBal-parseFloat(amounts),
                                          status: "LoanCleared",
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
                                        senderPhn: loaneePhnssss,
                                        recPhn: grpContactssss,  
                                        RecName:namess,
                                        SenderName:names,                                
                                        amount: amounts,                              
                                        description: Desc,
                                        status: "ChmCovLonRepayment",
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
                                await updtSendrAcLonOvr();
                              };
                              
                              const updtSendrAcLonOvr = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMAccount, {
                                        input:{
                                          phonecontact:SendrPhn,
                                          
                                          balance:parseFloat(SenderUsrBal)-TotalTransacted ,
                                          TtlClrdLonsTmsLneeChmCov:parseFloat(TtlClrdLonsTmsLneeChmCovs)+1,                                          
                                          TtlClrdLonsAmtLneeChmCov: parseFloat(TtlClrdLonsAmtLneeChmCovs) + parseFloat(amounts), 
                                          TtlActvLonsTmsLneeChmCov:parseFloat(TtlActvLonsTmsLneeChmCovs)-1,                                          
                                          TtlActvLonsAmtLneeChmCov: parseFloat(TtlActvLonsAmtLneeChmCovs) - parseFloat(amounts),
                                          TtlBLLonsTmsLneeChmCov:  parseFloat(TtlBLLonsTmsLneeChmCovs) - 1,
                                          TtlBLLonsAmtLneeChmCov: parseFloat(TtlBLLonsAmtLneeChmCovs) - parseFloat(amounts),
                                          MaxTymsBLs: parseFloat(MaxTymsBLss) - 1,
                                          loanStatus: "NoLoan",
                                          blStatus: "AccountNotBL",
                                                                             
                                          
                                        }
                                      })
                                    )
          
          
                                }
                                catch(error){
                                  if (error){Alert.alert("Check your internet connection")
                                  return;}
                                }
                                setIsLoading(false);
                                await updtRecAcLonOver();
                              }
          
                              const updtRecAcLonOver = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateGroup, {
                                        input:{
                                          grpContact:grpContactssss,
                                          
                                          grpBal:parseFloat(RecUsrBal) + parseFloat(amounts),                                     
                                          TtlBLLonsTmsLnrChmCov: parseFloat(TtlBLLonsTmsLnrChmCovs) - 1,
                                          TtlBLLonsAmtLnrChmCov: parseFloat(TtlBLLonsAmtLnrChmCovs) - parseFloat(amounts),
                                          TtlClrdLonsTmsLnrChmCov: parseFloat(TtlClrdLonsTmsLnrChmCovs) + 1,
                                          tymsChmHvBL: parseFloat(tymsChmHvBLs) - 1,
                                          TtlClrdLonsAmtLnrChmCov: parseFloat(TtlClrdLonsAmtLnrChmCovs) + parseFloat(amounts),
                                          TtlActvLonsTmsLnrChmCov:parseFloat(TtlActvLonsTmsLnrChmCovs)-1,                                          
                                          TtlActvLonsAmtLnrChmCov: parseFloat(TtlActvLonsAmtLnrChmCovs) - parseFloat(amounts),                                                                            
                                          
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
                                         
                                          companyEarningBal:UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarningBals),
                                          companyEarning: UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarnings),                                                    
                                          
                                          ttlChmLnsInActvAmtCov: parseFloat(amounts) - parseFloat(ttlChmLnsInActvAmtCov),
                                          ttlChmLnsInActvTymsCov: parseFloat(amounts) - parseFloat(ttlChmLnsInActvTymsCov),
                                          ttlChmLnsInClrdAmtCov: parseFloat(ttlChmLnsInClrdAmtCovs) + parseFloat(amounts) ,
                                          ttlChmLnsInClrdTymsCov: parseFloat(ttlChmLnsInClrdTymsCovs) + parseFloat(amounts) ,
                                          ttlChmLnsInBlTymsCov: parseFloat(ttlChmLnsInBlTymsCovs) - 1, 
                                          ttlChmLnsInBlAmtCov: parseFloat(ttlChmLnsInBlAmtCovs) - parseFloat(amounts), 
                                          
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  
                                }
                                Alert.alert(names + " has fully repayed " + namess +" Ksh. "+ amounts);
                                setIsLoading(false);
                              }    
                              
                              const updtChmMbrTTlBl  = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateGrpMembers, {
                                        input:{
                                          id:memberIds,
                                          loanAcBal: parseFloat(loanAcBals) - parseFloat(amounts),
                                          
                                      }})
                                    )
          
          
                                }
                                catch(error){
                                  if (error){Alert.alert("Check your internet connection")
                                  return;}
                                }
                                setIsLoading(false);
                                await repyCovLn();
                              }
                        

                              const repyCovLn = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCvrdGroupLoans, {
                                        input:{
                                          id:LnId,
                                          amountRepaid: parseFloat(amounts) + parseFloat(amountrepaids),
                                          lonBala: LonBal - parseFloat(amounts),
                                        }
                                      })
                                    )
          
          
                                }
                                catch(error){
                                  if (error){Alert.alert("Check your internet connection")
                                  return;}
                                }
                                setIsLoading(false);
                                await updtSendrAc();
                              }
                              
                              
                              const updtSendrAc = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMAccount, {
                                        input:{
                                          phonecontact:SendrPhn,
                                          
                                          balance:parseFloat(SenderUsrBal)-TotalTransacted,
                                                                       
                                          TtlActvLonsAmtLneeChmCov: parseFloat(TtlActvLonsAmtLneeChmCovs) - parseFloat(amounts),
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
                                      graphqlOperation(updateGroup, {
                                        input:{
                                          grpContact:grpContactssss,
                                          
                                          grpBal:parseFloat(RecUsrBal) + parseFloat(amounts),                                     
                                          
                                          TtlActvLonsAmtLnrChmCov: parseFloat(TtlActvLonsAmtLnrChmCovs) - parseFloat(amounts),                                        
                                          tymsChmHvBL: parseFloat(tymsChmHvBLs) - 1,
                                          
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
                                         
                                          companyEarningBal:UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarningBals),
                                          companyEarning: UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarnings),                                                    
                                          ttlChmLnsInActvAmtCov: ttlChmLnsInActvAmtCov - parseFloat(amounts),
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  
                                }
                                Alert.alert(names + " has repayed " + amounts + " to " + namess);
                                setIsLoading(false);
                              }

                                                          
                                                    
                              
                              if(usrAcActvStts !== "AccountActive"){Alert.alert('Sender account is inactive');
                              return;
                            }
                              else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');
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

                          else if(parseFloat(amounts) > LonBal){Alert.alert("Your Loan Balance is lesser: "+LonBal)}
                          

                          else if(parseFloat(amounts) === LonBal){updtChmMbrTTlBlOvr();}                         
                          
                              
                               else {
                                updtChmMbrTTlBl();
                              }

                            }
                            catch (e) {
                              if (e){Alert.alert("There is no such a member")
                              return;}
                          };
                        }
                      
                        await fetchMmbrDtls();
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
                  await fetchCompDtls();
        } catch (e) {
          if (e){Alert.alert("Check your internet connection")
      return;}
        }
        setIsLoading(false);        
      };
      await fetchSenderUsrDtls();
    
      
    } catch (e) {
      if (e){Alert.alert("Sender does not exist")
      return;}
  };
      setIsLoading(false);
      
      setAmount("");
     
      setLnId("");
      setDesc("");
      setSnderPW("");
      
      
}


useEffect(() =>{
  const SnderNatIds=SenderNatId
    if(!SnderNatIds && SnderNatIds!=="")
    {
      setSenderNatId("");
      return;
    }
    setSenderNatId(SnderNatIds);
    }, [SenderNatId]
     );

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

                             useEffect(() =>{
                              const LnIds=LnId
                                if(!LnIds && LnIds!=="")
                                {
                                  setLnId("");
                                  return;
                                }
                                setLnId(LnIds);
                                }, [LnId]
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
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Loanee PassWord</Text>
          </View>

          

          

          <View style={styles.sendAmtView}>
            <TextInput
              multiline={true}
              value={LnId}
              onChangeText={setLnId}
              style={styles.sendAmtInputDesc}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Loan Id</Text>
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
            <Text style={styles.sendAmtButtonText}>Send</Text>
            {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
          </TouchableOpacity>

          
        </ScrollView>
      </View>
    </View>
  );
};

export default RepayNonCovChmLnsss;