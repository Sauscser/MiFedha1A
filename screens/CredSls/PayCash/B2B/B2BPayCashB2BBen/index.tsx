import React, {useEffect, useState} from 'react';
import Communications from 'react-native-communications';
import {
  
  createSMLoansCovered,
  
  
  
  createNonLoans,
  
  updateCompany,
  
  updateSMAccount,
  updateBizna,
  createBizSls,
  updateBizSlsReq,
  createBenefitContributions2,
  
} from '../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {
  
  getBizSlsReq,
  getBizna,
  getCompany,
  
  getSMAccount,
  listCovCreditSellers,
  listCvrdGroupLoans,
  listSMLoansCovereds,
 
} from '../../../../../src/graphql/queries';

import {useNavigation, useRoute} from '@react-navigation/native';

import {
  View,
  Text,
  Linking,
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


const SMASendNonLns = props => {

 
  const[isLoading, setIsLoading] = useState(false);
  const route = useRoute();
  const navigation = useNavigation()
  const SndChmMmbrMny = () => {
    navigation.navigate("AutomaticRepayAllTyps")
 }

 
  
 
const fetchSaleReqDtls = async () => {
  if(isLoading){
    return;
  }
  setIsLoading(true);
  try {
    const accountDtl:any = await API.graphql(
      graphqlOperation(getBizSlsReq, {id: route.params.id}),
      );
  
      const senderPhn =accountDtl.data.getBizSlsReq.senderPhn;                    
      const recPhn =accountDtl.data.getBizSlsReq.recPhn; 
      const RecName =accountDtl.data.getBizSlsReq.RecName;
      const SenderName =accountDtl.data.getBizSlsReq.SenderName;
      const amount =accountDtl.data.getBizSlsReq.amount;
      const description =accountDtl.data.getBizSlsReq.description;
      const owner =accountDtl.data.getBizSlsReq.owner;
      const attendingAdmin =accountDtl.data.getBizSlsReq.attendingAdmin;
    
    
    const fetchCvLnSM = async () => {
      

      const userInfo = await Auth.currentAuthenticatedUser();


      try {
        const Lonees1:any = await API.graphql(graphqlOperation(listSMLoansCovereds, 
          { filter: {
              and: {
                status: { eq: "LoanBL"},
                lonBala: { gt: 0},
                loaneeEmail: { eq: userInfo.attributes.email},
              }
            }}
            ));

           
        
                    const fetchCLCrdSl = async () => {
                      
                      try {
                        const Lonees3:any = await API.graphql(graphqlOperation(listCovCreditSellers, 
                          { filter: {
                              and: {
                                status: { eq: "LoanBL"},
                        lonBala: { gt: 0},
                        buyerContact: { eq: senderPhn},
                              }
                            }}
                            ));

                            

                                    const fetchCLChm = async () => {
                                      
                                      try {
                                        const Lonees5:any = await API.graphql(graphqlOperation(listCvrdGroupLoans, 
                                          { filter: {
                                              and: {
                                                status: { eq: "LoanBL"},
                                        lonBala: { gt: 0},
                                        loaneePhn: { eq: userInfo.attributes.email},
                                              }
                                            }}
                                            ));

                                            



                                            
                                          
const fetchSenderUsrDtls = async () => {
    
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getBizna, {BusKntct: senderPhn}),
      );

      const SenderUsrBal =accountDtl.data.getBizna.netEarnings;                    
      const bizBeneficiaryz =accountDtl.data.getBizna.bizBeneficiary; 
      const SenderbizType =accountDtl.data.getBizna.bizType;
      const name =accountDtl.data.getBizna.busName;
      const ownerz =accountDtl.data.getBizna.owner;
      const SenderAcstatus =accountDtl.data.getBizna.status;
      const pw =accountDtl.data.getBizna.pw;
      const SenderbenefitsAmount =accountDtl.data.getBizna.benefitsAmount;
      const objectionStatus =accountDtl.data.getBizna.objectionStatus;
              const Admin1 = accountDtl.data.getBizna.Admin1;      
              const Admin2 = accountDtl.data.getBizna.Admin2;
              const Admin3 = accountDtl.data.getBizna.Admin3;
              const Admin4 = accountDtl.data.getBizna.Admin4;
              const Admin5 = accountDtl.data.getBizna.Admin5;
              const Admin6 = accountDtl.data.getBizna.Admin6;
              const Admin7 = accountDtl.data.getBizna.Admin7;
              const Admin8 = accountDtl.data.getBizna.Admin8;
              const Admin9 = accountDtl.data.getBizna.Admin9;
              const Admin10 = accountDtl.data.getBizna.Admin10;
              const Admin11 = accountDtl.data.getBizna.Admin11;
              const Admin12 = accountDtl.data.getBizna.Admin12;
              const Admin13 = accountDtl.data.getBizna.Admin13;
              const Admin14 = accountDtl.data.getBizna.Admin14;
              const Admin15 = accountDtl.data.getBizna.Admin15;
              const Admin16 = accountDtl.data.getBizna.Admin16;
              const Admin17 = accountDtl.data.getBizna.Admin17;
              const Admin18 = accountDtl.data.getBizna.Admin18;
              const Admin19 = accountDtl.data.getBizna.Admin19;
              const Admin20 = accountDtl.data.getBizna.Admin20;
              const Admin21 = accountDtl.data.getBizna.Admin21;
              const Admin22 = accountDtl.data.getBizna.Admin22;
              const Admin23 = accountDtl.data.getBizna.Admin23;
              const Admin24 = accountDtl.data.getBizna.Admin24;
              const Admin25 = accountDtl.data.getBizna.Admin25;
              const Admin26 = accountDtl.data.getBizna.Admin26;
              const Admin27 = accountDtl.data.getBizna.Admin27;
              const Admin28 = accountDtl.data.getBizna.Admin28;
              const Admin29 = accountDtl.data.getBizna.Admin29;
              const Admin30 = accountDtl.data.getBizna.Admin30;
              const Admin31 = accountDtl.data.getBizna.Admin31;
              const Admin32 = accountDtl.data.getBizna.Admin32;
              const Admin33 = accountDtl.data.getBizna.Admin33;
              const Admin34 = accountDtl.data.getBizna.Admin34;
              const Admin35 = accountDtl.data.getBizna.Admin35;
              const Admin36 = accountDtl.data.getBizna.Admin36;
              const Admin37 = accountDtl.data.getBizna.Admin37;
              const Admin38 = accountDtl.data.getBizna.Admin38;
              const Admin39 = accountDtl.data.getBizna.Admin38;
              const Admin40 = accountDtl.data.getBizna.Admin40;
              const Admin41 = accountDtl.data.getBizna.Admin41;
              const Admin42 = accountDtl.data.getBizna.Admin42;
              const Admin43 = accountDtl.data.getBizna.Admin43;
              const Admin44 = accountDtl.data.getBizna.Admin44;
              const Admin45 = accountDtl.data.getBizna.Admin45;
              const Admin46 = accountDtl.data.getBizna.Admin46;
              const Admin47 = accountDtl.data.getBizna.Admin47;
              const Admin48 = accountDtl.data.getBizna.Admin48;
              const Admin49 = accountDtl.data.getBizna.Admin49;
              const Admin50 = accountDtl.data.getBizna.Admin50;

      const fetchCompDtls = async () => {
        
        try {
          const CompDtls:any = await API.graphql(
            graphqlOperation(getCompany, {
              AdminId: "BaruchHabaB'ShemAdonai2",
            }),
          );
          
          const b2bBenCom = CompDtls.data.getCompany.b2bBenCom;   
          
          const biznaCashSaleFee = CompDtls.data.getCompany.userTransferFee;
          const biznaCashSaleFeeAmt = parseFloat(biznaCashSaleFee)*parseFloat(amount);
          const UsrTransferFee2 = parseFloat(SenderUsrBal) -parseFloat(amount);
          const TotalTransacted = parseFloat(amount)  + parseFloat(biznaCashSaleFee)*parseFloat(amount);
          const TotalTransacted2 = parseFloat(amount)  + UsrTransferFee2;
          const BizBenPercentage =   parseFloat(b2bBenCom) * parseFloat(biznaCashSaleFee);
          const BizBenefits = BizBenPercentage * parseFloat(amount);
          const CompEarnings = biznaCashSaleFeeAmt - (2*BizBenefits);
          
          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const ttlNonLonssRecSMs = CompDtls.data.getCompany.ttlNonLonssRecSM;
          const ttlNonLonssSentSMs = CompDtls.data.getCompany.ttlNonLonssSentSM; 
          
         
                    
          const fetchRecUsrDtls = async () => {
            
            try {
                const RecAccountDtl:any = await API.graphql(
                    graphqlOperation(getBizna, {BusKntct: recPhn}),
                    );
                    const RecUsrBal =RecAccountDtl.data.getBizna.netEarnings;                    
                    const bizBeneficiary =RecAccountDtl.data.getBizna.bizBeneficiary; 
                    const RecBizType =RecAccountDtl.data.getBizna.bizType;
                    const RecbenefitsAmount =RecAccountDtl.data.getBizna.benefitsAmount;
                    const RecAcstatus =RecAccountDtl.data.getBizna.status;
                    

                    const fetchSenderBizUsrDtls = async () => {
                      
                      try {
                        const accountDtl7:any = await API.graphql(
                          graphqlOperation(getSMAccount, {awsemail: bizBeneficiaryz}),
                        );
                  
                        const SenderUsrBal7 =accountDtl7.data.getSMAccount.balance;
                        const senderbeneficiaryAmt =accountDtl7.data.getSMAccount.beneficiaryAmt;

                        const fetchRecBizUsrDtls = async () => {
                         
                          try {
                            const accountDtl8:any = await API.graphql(
                              graphqlOperation(getSMAccount, {awsemail: bizBeneficiary}),
                            );
                      
                            const SenderUsrBal8 =accountDtl8.data.getSMAccount.balance;
                            const recbeneficiaryAmt =accountDtl8.data.getSMAccount.beneficiaryAmt;                    
                    
                            console.log(SenderUsrBal)
                            console.log(TotalTransacted)
                            console.log(biznaCashSaleFee)
                            console.log(b2bBenCom)
                            console.log(recPhn)
                            
                            
        
                            
                            const sendSMNonLn7 = async () => {
                              
                              try {
                                await API.graphql(
                                  graphqlOperation(createBizSls, {
                                    input: {
                                      saleId:route.params.id,
                                      recPhn: recPhn,
                                      senderPhn: senderPhn,                                  
                                      amount: parseFloat(amount).toFixed(0),                              
                                      description: description,
                                      RecName:RecName,
                                      SenderName:SenderName,
                                      status: "cashSales",
                                      owner: owner,
                                      attendingAdmin:attendingAdmin
                                    },
                                  }),
                                );
        
        
                              } catch (error) {
                                console.log(error)
                                if (error){
                                  Alert.alert("Sending unsuccessful; Retry")
                                  return
                                }
                              }
                             
                              await updtSendrAc7();
                            };
        
                           
        
                            const updtSendrAc7 = async () =>{
                              
                              try{
                                  await API.graphql(
                                    graphqlOperation(updateBizna, {
                                      input:{
                                        BusKntct: senderPhn,                                
                                        netEarnings:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(0) ,                              
                                        benefitsAmount: parseFloat(SenderbenefitsAmount) + BizBenefits
                                      }
                                    })
                                  )
        
        
                              }
                              catch(error){
                                console.log(error)
                                if (error){Alert.alert("Retry or update your app1")
                                return;}
                              }
                              
                              await createBizBenefits4 ();
                            }

                            const createBizBenefits4 = async () =>{
                             
                              try{
                                  await API.graphql(
                                    graphqlOperation(createBenefitContributions2, {
                                      input:{
                                        benefitsID: "String",
                                        benefactorAc: recPhn,
                                        benefactorPhone: recPhn,
                                        beneficiaryAc: senderPhn,
                                        beneficiaryPhone: "String",
                                        creatorEmail: userInfo.attributes.email,
                                        prodName: "String",
                                        creatorName: "String",
                                        owner: userInfo.attributes.sub,
                                        prodCost: 0,
                                        benefitsAmount: BizBenefits,
                                        beneficiaryType: "Pal",
                                        prodDesc: "String",
                                        benefitStatus: "Active",
                                        amount: BizBenefits                  
                                        
                                      }
                                    })
                                  )                              
                              }
                              catch(error){
                                console.log(error)
                                if (error){Alert.alert("Retry or update your app2")
                                return;}
                              }
                              
                              await updtRecAc7();
                            }
        
        
                            const updtRecAc7 = async () =>{
                              
                              try{
                                  await API.graphql(
                                    graphqlOperation(updateBizna, {
                                      input:{
                                        BusKntct:recPhn,
                                        
                                        netEarnings:(parseFloat(RecUsrBal) + parseFloat(amount)).toFixed(0),                                   
                                        earningsBal:   (parseFloat(RecUsrBal) + parseFloat(amount)).toFixed(0),
                                        benefitsAmount: parseFloat(RecbenefitsAmount) + BizBenefits                        
                                        
                                      }
                                    })
                                  )                              
                              }
                              catch(error){
                                console.log(error)
                                if (error){Alert.alert("Retry or update your app3")
                                return;}
                              }
                              
                              await createBizBenefits3();
                            }
        

                            const createBizBenefits3 = async () =>{
                              
                              try{
                                  await API.graphql(
                                    graphqlOperation(createBenefitContributions2, {
                                      input:{
                                        benefitsID: "String",
                                        benefactorAc: senderPhn,
                                        benefactorPhone: senderPhn,
                                        beneficiaryAc: recPhn,
                                        beneficiaryPhone: "String",
                                        creatorEmail: userInfo.attributes.email,
                                        prodName: "String",
                                        creatorName: "String",
                                        owner: userInfo.attributes.sub,
                                        prodCost: 0,
                                        benefitsAmount: BizBenefits,
                                        beneficiaryType: "Pal",
                                        prodDesc: "String",
                                        benefitStatus: "Active",
                                        amount: BizBenefits                  
                                        
                                      }
                                    })
                                  )                              
                              }
                              catch(error){
                                console.log(error)
                                if (error){Alert.alert("Retry or update your app4")
                                return;}
                              }
                              
                              await updtComp7();
                            }                                 
        
                            
        
        
        
                            const updtComp7 = async () =>{
                              
                              try{
                                  await API.graphql(
                                    graphqlOperation(updateCompany, {
                                      input:{
                                        AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                       
                                        companyEarningBal:CompEarnings + parseFloat(companyEarningBals),
                                        companyEarning: CompEarnings + parseFloat(companyEarnings),                                                    
                                        
                                        ttlNonLonssRecSM: parseFloat(amount) + parseFloat(ttlNonLonssRecSMs),
                                        ttlNonLonssSentSM: parseFloat(amount) + parseFloat(ttlNonLonssSentSMs),
                                        
                                      }
                                    })
                                  )
                                  
                                  
                              }
                              catch(error){
                                console.log(error)
                                if (error){Alert.alert("Retry or update your app5")
                            return;}
                              }
                              await updtLnReqAc7 ()
                            }

                            const updtLnReqAc7 = async () =>{
                              
                              try{
                                const response = await API.graphql(
                                    graphqlOperation(updateBizSlsReq, {
                                      input:{
                                        id:route.params.id,                                
                                        status:"Approved",
                                        
                                      }
                                    })
                                  )    
                                  
                                  if (response?.data?.updateBizSlsReq) {
                                    Alert.alert(
                                      "Success",
                                      `Amount: Ksh. ${parseFloat(amount).toFixed(0)}. Transaction fee: Ksh. ${biznaCashSaleFeeAmt.toFixed(0)}`
                                    );
                                  } else {
                                    Alert.alert("Update failed", "No response or invalid response from the database.");
                                  }
                              }
                              catch(error){
                                console.log(error)
                                if (error){Alert.alert("Retry or update your app6")
                                return;}
                              }
                              
                            }

                       
                    
                    if (userInfo.attributes.sub!==ownerz
                      &&Admin1 !== userInfo.attributes.email
                      &&
                      Admin2 !== userInfo.attributes.email 
                      &&
                      Admin3 !== userInfo.attributes.email
                      &&
                      Admin4 !== userInfo.attributes.email 
                      &&
                      Admin5 !== userInfo.attributes.email
                      &&
                      Admin6 !== userInfo.attributes.email 
                      &&
                      Admin7 !== userInfo.attributes.email
                      &&
                      Admin8 !== userInfo.attributes.email 
                      &&
                      Admin9 !== userInfo.attributes.email
                      &&
                      Admin10 !== userInfo.attributes.email 
                      &&
                      Admin11 !== userInfo.attributes.email
                      &&
                      Admin12 !== userInfo.attributes.email 
                      &&
                      Admin13 !== userInfo.attributes.email
                      &&
                      Admin14 !== userInfo.attributes.email 
                      &&
                      Admin14 !== userInfo.attributes.email
                      &&
                      Admin15 !== userInfo.attributes.email 
                      &&
                      Admin16 !== userInfo.attributes.email
                      &&
                      Admin17 !== userInfo.attributes.email 
                      &&
                      Admin18 !== userInfo.attributes.email
                      &&
                      Admin19 !== userInfo.attributes.email 
                      &&
                      Admin20 !== userInfo.attributes.email
                      &&
                      Admin21 !== userInfo.attributes.email 
                      &&
                      Admin22 !== userInfo.attributes.email
                      &&
                      Admin23 !== userInfo.attributes.email 
                      &&
                      Admin24 !== userInfo.attributes.email
                      &&
                      Admin25 !== userInfo.attributes.email 
                      &&
                      Admin26 !== userInfo.attributes.email
                      &&
                      Admin27 !== userInfo.attributes.email 
                      &&
                      Admin28 !== userInfo.attributes.email
                      &&
                      Admin29 !== userInfo.attributes.email 
                      &&
                      Admin30 !== userInfo.attributes.email
                      &&
                      Admin31 !== userInfo.attributes.email 
                      &&
                      Admin32 !== userInfo.attributes.email
                      &&
                      Admin33 !== userInfo.attributes.email 
                      &&
                      Admin34 !== userInfo.attributes.email
                      &&
                      Admin35 !== userInfo.attributes.email 
                      &&
                      Admin36 !== userInfo.attributes.email
                      &&
                      Admin37 !== userInfo.attributes.email 
                      &&
                      Admin38 !== userInfo.attributes.email
                      &&
                      Admin39 !== userInfo.attributes.email 
                      &&
                      Admin40 !== userInfo.attributes.email
                      &&
                      Admin41 !== userInfo.attributes.email 
                      &&
                      Admin42 !== userInfo.attributes.email
                      &&
                      Admin43 !== userInfo.attributes.email 
                      &&
                      Admin44 !== userInfo.attributes.email
                      &&
                      Admin45 !== userInfo.attributes.email 
                      &&
                      Admin46 !== userInfo.attributes.email
                      &&
                      Admin47 !== userInfo.attributes.email 
                      &&
                      Admin48 !== userInfo.attributes.email
                      &&
                      Admin49 !== userInfo.attributes.email 
                      &&
                      Admin50 !== userInfo.attributes.email ) {
                      Alert.alert("Unauthorised to pay on behalf of the business!")
                      return;
                    }  
                    
                    
                    
                    else if(RecAcstatus === "AccountInactive"){Alert.alert('Receiver account is inactive');}
                    else if(SenderAcstatus === "AccountInactive"){Alert.alert('Sender account is inactive');}
                   
                    else if(objectionStatus === "Objected"){Alert.alert('Business account locked by the creator or admin');}
                        
                    
                    else if (
                      Lonees3.data.listCovCreditSellers.items.length > 0 
                      
                      
                      ) {
                        SndChmMmbrMny();
                    } 

                     else if(TotalTransacted > SenderUsrBal
                      ){
                        Alert.alert("Your account balance is insufficient")
                    }   
                    
                    else {
                      await sendSMNonLn7();
                    }
                 
                  }       
                  catch(e) {   
                    console.log(e)  
                    if (e){Alert.alert("Retry or update app or call customer care")
    return;}                 
                  }
                 
                  }                    
                    await fetchRecBizUsrDtls();
                  
                  }       
                  catch(e) {   
                    console.log(e)  
                    if (e){Alert.alert("Retry or update app or call customer care")
    return;}                 
                  }
                  
                  }                    
                    await fetchSenderBizUsrDtls();
                  
                  }       
                catch(e) {   
                  console.log(e)  
                  if (e){Alert.alert("Retry or update app or call customer care")
  return;}                 
                }
                
                }                    
                  await fetchRecUsrDtls();
        } catch (e) {
          console.log(e)
          if (e){Alert.alert("Retry or update your app7")
      return;}
        }
             
      };
      await fetchCompDtls();
    
      
    

  

}     
catch (e) {
  console.log(e)
  if (e){Alert.alert("Retry or update your app8")
  return;}
     
}   

};

await fetchSenderUsrDtls();
    
    }     
    catch (e) {
      console.log(e)
      if (e){Alert.alert("Retry or update your app9")
      return;}
         
    }   
    
    };
    
    await fetchCLChm();
    
    
    
    }     
    catch (e) {
      console.log(e)
      if (e){Alert.alert("Retry or update your app10")
      return;}
         
    }   
   
    };
    
    await fetchCLCrdSl();
    
  }     
  catch (e) {
    console.log(e)
    if (e){Alert.alert("Retry or update your app11")
    return;}
       
  }   
  
  };
  
  await fetchCvLnSM();
    
          
        } catch (e) {
          console.log(e)
          if (e){Alert.alert("Please fill details correctly or Retry or update your app")
          return;}
      }
  
      finally {
        setIsLoading(false); // Ensure loading state is reset
      }

      
}

useEffect(() => {
  fetchSaleReqDtls();
}, [])  


  return (
    <View style={styles.image}>
    <Text style={styles.sendAmtButtonText}>Please wait for feedback</Text>
            {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
    </View>
  );
};

export default SMASendNonLns;