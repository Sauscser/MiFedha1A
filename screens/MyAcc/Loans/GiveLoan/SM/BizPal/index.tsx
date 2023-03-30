import React, {useEffect, useState} from 'react';
import Communications from 'react-native-communications';

import {
  createFloatAdd,
  createSMAccount,
  createSMLoansCovered,
  updateAdvocate,
  updateAgent,
  updateBizna,
  updateCompany,
  updateReqLoan,
  updateSAgent,
  updateSMAccount,
  
} from '../../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation, DataStore} from 'aws-amplify';
import {
  getAgent,
  getCompany,
  getSMAccount,
  getSAgent,
  getAdvocate,
  
  listChamasNPwnBrkrs,
  listChamasRegConfirms,
  getReqLoan,
  listSMLoansCovereds,
  listSMLoansNonCovereds,
  listCovCreditSellers,
  listNonCovCreditSellers,
  listCvrdGroupLoans,
  listNonCvrdGroupLoans,
  getBizna,
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
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import { parse } from 'expo-linking';

const SMASendLns = props => {
 
  
  const [SnderPW, setSnderPW] = useState("");
  const [RepaymtPeriod, setRepaymtPeriod] = useState("");
  const [amount, setAmount] = useState("");
  const [AmtExp, setAmtExp] = useState("");
  const [AdvRegNo, setAdvRegNo] = useState("");
  const [Desc, setDesc] = useState("");
 
  const[isLoading, setIsLoading] = useState(false);
  const [RecAccCode, setRecAccCode] = useState("");
  
  const [PwnBrkr, setPwnBrkr] = useState('');
  
  
  const route = useRoute();
  const navigation = useNavigation()
  const SndChmMmbrMny = () => {
    navigation.navigate("AutomaticRepayAllTyps")
 }
  

  
  
    const fetchCvLnSM = async () => {
      setIsLoading(true);
      const userInfo = await Auth.currentAuthenticatedUser();
      
      
      try {
        const Lonees1:any = await API.graphql(graphqlOperation(listSMLoansCovereds, 
          { filter: {
              and: {
                status: { eq: "LoanBL"},
                lonBala: { gt: 0},
                loaneePhn: { eq: userInfo.attributes.email},
              }
            }}
            ));

            
        
                    const fetchCLCrdSl = async () => {
                      setIsLoading(true);
                      try {
                        const Lonees3:any = await API.graphql(graphqlOperation(listCovCreditSellers, 
                          { filter: {
                              and: {
                                status: { eq: "LoanBL"},
                        lonBala: { gt: 0},
                        buyerContact: { eq: userInfo.attributes.email},
                              }
                            }}
                            ));

                            
                                    const fetchCLChm = async () => {
                                      setIsLoading(true);
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

                                            


    const fetchLnReq = async () => {
      if(isLoading){
        return;
      }
      setIsLoading(true);
      try {
        const accountDtlszs:any = await API.graphql(
          graphqlOperation(getReqLoan, {id: route.params.id}),
        );

        const advLicNo =accountDtlszs.data.getReqLoan.advLicNo;
        const loaneeEmail =accountDtlszs.data.getReqLoan.loaneeEmail;
        const statusNumber =accountDtlszs.data.getReqLoan.statusNumber;
        const status =accountDtlszs.data.getReqLoan.status;
        const amount =accountDtlszs.data.getReqLoan.amount;
        const AmtExp =accountDtlszs.data.getReqLoan.repaymentAmt;
        const RepaymtPeriod =accountDtlszs.data.getReqLoan.repaymentPeriod;
        const defaultPenalty =accountDtlszs.data.getReqLoan.defaultPenalty;
        const description =accountDtlszs.data.getReqLoan.description;
        const advEmail =accountDtlszs.data.getReqLoan.advEmail;
        const loanerEmail =accountDtlszs.data.getReqLoan.loanerEmail;
        
        const DefaultPenaltyRate = parseFloat(defaultPenalty)/parseFloat(AmtExp) *100;
        const RecomDfltPnltyRate = (parseFloat(AmtExp)*20) / 100;

        
        const fetchBizDtls = async () => {
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try {
            const accountDtl12:any = await API.graphql(
              graphqlOperation(getBizna, {BusKntct: loanerEmail}),
            );
      
            const email =accountDtl12.data.getBizna.email;
            const SenderUsrBal =accountDtl12.data.getBizna.netEarnings;
            const busName =accountDtl12.data.getBizna.busName;
            const ownerzs =accountDtl12.data.getBizna.owner;
           
            
            
            const fetchSenderUsrDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {awsemail: email}),
      );

      
      const SenderNatId =accountDtl.data.getSMAccount.nationalid;
     

      const today = new Date();
              let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
              let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
              let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
              let years = (today.getFullYear() < 10 ? '0' : '') + today.getFullYear();
              let months = (today.getMonth() < 10 ? '0' : '') + today.getMonth();
              let months2 = parseFloat(months)
              let days = (today.getDate() < 10 ? '0' : '') + today.getDate();
              
              const now:any = years+ "-"+ "0"+months2 +"-"+ days+"T"+hours + ':' + minutes + ':' + seconds;
              const curYrs = parseFloat(years)*365;
              const curMnths = (months2)*30.4375;
              const daysUpToDate = curYrs + curMnths + parseFloat(days)
      
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
          
          const userLoanTransferFees = CompDtls.data.getCompany.userLoanTransferFee;
          const AdvComs = CompDtls.data.getCompany.AdvCom;
          const CoverageFees = CompDtls.data.getCompany.CoverageFee;
          const AdvCompanyComs = CompDtls.data.getCompany.AdvCompanyCom;
          const AdvCovFee =(parseFloat(CoverageFees)*parseFloat(AdvComs))
          const CompCovFee = parseFloat(CoverageFees)*parseFloat(AdvCompanyComs);
          const AdvCovAmt = AdvCovFee*parseFloat(amount)
          const CompCovAmt = CompCovFee*parseFloat(amount)
          const ttlCovFeeAmount = parseFloat(CoverageFees)*parseFloat(amount)
                   
          const CompanyTotalEarnings = CompCovFee*parseFloat(amount) + parseFloat(userLoanTransferFees)*parseFloat(amount)
          
          const CompPhoneContact = CompDtls.data.getCompany.phoneContact;         
          const ttlCompCovEarningss = CompDtls.data.getCompany.ttlCompCovEarnings;

          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const AdvEarningBals = CompDtls.data.getCompany.AdvEarningBal;
          const AdvEarnings = CompDtls.data.getCompany.AdvEarning; 
         
          const ttlSMLnsInAmtCovs = CompDtls.data.getCompany.ttlSMLnsInAmtCov;
          const ttlSMLnsInActvAmtCovs = CompDtls.data.getCompany.ttlSMLnsInActvAmtCov;
          const ttlSMLnsInTymsCovs = CompDtls.data.getCompany.ttlSMLnsInTymsCov;
          const ttlSMLnsInActvTymsCovs = CompDtls.data.getCompany.ttlSMLnsInActvTymsCov;       
          const maxInterestSMs = CompDtls.data.getCompany.maxInterestSM;
          const maxBLss = CompDtls.data.getCompany.maxBLs;
        
          
          
          const IntAmt = parseFloat(AmtExp) - (parseFloat(amount) + 
          parseFloat(userLoanTransferFees)*parseFloat(amount) + ttlCovFeeAmount)

          
          const phoneContacts = CompDtls.data.getCompany.phoneContact;
          const maxInterestPwnBrkrs = CompDtls.data.getCompany.maxInterestPwnBrkr;
          const MaxSMInterest = (parseFloat(AmtExp) -  
              (parseFloat(userLoanTransferFees)*parseFloat(amount) 
              + ttlCovFeeAmount) )*parseFloat(maxInterestSMs)*parseFloat(RepaymtPeriod);
          const MaxPwnBrkrInterest = (parseFloat(amount) +  
          (parseFloat(userLoanTransferFees)*parseFloat(amount) 
          + ttlCovFeeAmount) )*parseFloat(maxInterestPwnBrkrs)*parseFloat(RepaymtPeriod);
          const ActualMaxSMInterest = parseFloat(AmtExp) - (parseFloat(amount) +  parseFloat(userLoanTransferFees)*parseFloat(amount) + 
          ttlCovFeeAmount);
          const ActualMaxPwnBrkrInterest = parseFloat(AmtExp) - (parseFloat(amount) +  parseFloat(userLoanTransferFees)*parseFloat(amount) + 
          ttlCovFeeAmount);
          
          
          const lnTrnsfrFee = parseFloat(userLoanTransferFees)*parseFloat(amount);
          
          
          
          const TtlTransCost = ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount)  + parseFloat(amount);

          const AllTtlCost = TtlTransCost + (parseFloat(AmtExp)-parseFloat(amount));

          
          const TtlTransCost2 = ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount)  + parseFloat(amount);
          const CompanyTotalEarnings2 = parseFloat(userLoanTransferFees)*parseFloat(amount)
          const amtrpayable2 = Math.pow(parseFloat(amount)*(1 + parseFloat(AmtExp)), RepaymtPeriod/30)
          const amtrpayable = Math.pow(parseFloat(amount)*(1 + parseFloat(AmtExp)), RepaymtPeriod/30)
          const TotalAmtExp = ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount) + amtrpayable;
          const TotalAmtExp2 =  parseFloat(userLoanTransferFees)*parseFloat(amount) + amtrpayable2;
          
              

              const fetchRecUsrDtls = async () => {
                if(isLoading){
                  return;
                }
                setIsLoading(true);
                try {
                    const RecAccountDtl:any = await API.graphql(
                        graphqlOperation(getSMAccount, {awsemail: loaneeEmail}),
                        );
                        const RecUsrBal =RecAccountDtl.data.getSMAccount.balance;
                        const RecNatId =RecAccountDtl.data.getSMAccount.nationalid;
                        const usrNoBL =RecAccountDtl.data.getSMAccount.MaxTymsBL;
                        const usrAcActvSttss =RecAccountDtl.data.getSMAccount.acStatus; 
                        const phonecontact =RecAccountDtl.data.getSMAccount.phonecontact; 
                        const TtlActvLonsTmsLnrCovss =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLnrCov; 
                        const TtlActvLonsTmsLneeCovss =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLneeCov; 
                        const TtlActvLonsTmsLnrCovs1 =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLnrCov;
                        const TtlActvLonsAmtLnrCovs1 =RecAccountDtl.data.getSMAccount.TtlActvLonsAmtLnrCov;
                        const namess =RecAccountDtl.data.getSMAccount.name;
                        const ttlDpstSMs =RecAccountDtl.data.getSMAccount.ttlDpstSM;
                        const TtlWthdrwnSMs =RecAccountDtl.data.getSMAccount.TtlWthdrwnSM;
                        const DefaultPenaltySMs =RecAccountDtl.data.getSMAccount.DefaultPenaltySM;


                        const sendSMLn = async () => {
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try {
                            await API.graphql(
                              graphqlOperation(createSMLoansCovered, {
                                input: {
                                  loaneeid: RecNatId,
                                  loanerId: SenderNatId,
                                  loanerPhn:loanerEmail,
                                  loaneePhn: phonecontact,  
                                  loaneeEmail:loaneeEmail,
                                  loanerLoanee:userInfo.attributes.email+loaneeEmail,
                                  loanerLoaneeAdv:  userInfo.attributes.email+loaneeEmail+ AdvRegNo ,                          
                                  amountgiven: parseFloat(amount).toFixed(0),
                                  loaneename:namess,
                                  loanername:busName,
                                  amountexpected: TotalAmtExp2.toFixed(0),
                                  amountExpectedBackWthClrnc:TotalAmtExp2.toFixed(0),
                                  DefaultPenaltySM:defaultPenalty,
                                  DefaultPenaltySM2:0,
                                  amountrepaid: 0,
                                  timeExpBack: parseFloat(RepaymtPeriod) + daysUpToDate,
                                  timeExpBack2: 61 + daysUpToDate,
                                  dfltUpdate: daysUpToDate,
                                  lonBala:TotalAmtExp2.toFixed(0),
                                  repaymentPeriod: RepaymtPeriod,
                                  interest:AmtExp,
                                  advregnu: "None",
                                  description: description,
                                  loanerEmail: loanerEmail,
                                  status: "LoanActive",
                                  owner: ownerzs,
                                  advEmail:"None"
                                },
                              }),
                            );


                          } catch (error) {
                            console.log(error)
                            if(error){Alert.alert("Error!")
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
                                graphqlOperation(updateBizna, {
                                  input:{
                                    BusKntct:loanerEmail,
                                                                      
                                    netEarnings:(parseFloat(SenderUsrBal)-TtlTransCost2).toFixed(0) 
                                   
                                    
                                  }
                                })
                              )


                          }
                          catch(error){
                            console.log(error)
                            if (error){Alert.alert("Error!")
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
                                    awsemail:loaneeEmail,
                                    
                                    TtlActvLonsTmsLnrCov: parseFloat(TtlActvLonsTmsLnrCovs1)+1,
                                    TtlActvLonsAmtLnrCov: (parseFloat(TtlActvLonsAmtLnrCovs1) + TotalAmtExp2).toFixed(0),
                                    balance:(parseFloat(RecUsrBal) + parseFloat(amount) ).toFixed(0) ,
                                    loanStatus:"LoanActive",                                    
                                    blStatus: "AccountNotBL",
                                    loanAcceptanceCode:"None"                                 
                                    
                                  }
                                })
                              )                              
                          }
                          catch(error){
                            console.log(error)
                            if (error){Alert.alert("Error!")
                            return;}
                          }
                          setIsLoading(false);
                          await updtComp();
                        }

                        const updtComp = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(false);
                          
                          try{
                              await API.graphql(
                                graphqlOperation(updateCompany, {
                                  input:{
                                    AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                        
                                    
                                    companyEarningBal:CompanyTotalEarnings2 + parseFloat(companyEarningBals), 
                                    
                                    companyEarning: CompanyTotalEarnings2 + parseFloat(companyEarnings),                    
                                   
                                    ttlSMLnsInAmtCov: TotalAmtExp2 + parseFloat(ttlSMLnsInAmtCovs),
                                    
                                    ttlSMLnsInTymsCov: 1 + parseFloat(ttlSMLnsInTymsCovs),
                                    
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            console.log(error)
                            if (error){Alert.alert("Error!")
                        return;}
                          }
                          setIsLoading(false);
                          await updtRecAc3();
                        }

         


                        const updtRecAc3 = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
                              await API.graphql(
                                graphqlOperation(updateReqLoan, {
                                  input:{
                                    id:route.params.id,
                                    status:"Approved"                  
                                    
                                  }
                                })
                              )                              
                          }
                          catch(error){
                            console.log(error)
                            
                          }
                          Communications.textWithoutEncoding(phonecontact,'Hi '+ namess 
                          + ', you have been loaned Ksh. '+ amount +' by '
                        + busName + 'Company. For clarification call the loaner Company: '
                        + loanerEmail 
                        + '. The following is a break down of your repayable loan: '
                        + ' Amount debited into your main account is Ksh. '+ amount 
                        + '. Amount you had committed to repay is Ksh. '
                        + AmtExp + '. Transaction fee is Ksh. '
                        + lnTrnsfrFee + 
                        '. Total Repayable is Ksh '+ TotalAmtExp 
                        + '. Thank you. MiFedha.');
                          setIsLoading(false);
                          
                        }
                        

                        
                                              
                            
                        
                        const fetchAdv = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
              
                            const AdvDtls:any = await API.graphql(
                              graphqlOperation(getAdvocate,
                                {advregnu: advLicNo}),
                                
                            );
                            const advTtlAern = AdvDtls.data.getAdvocate.TtlEarnings;
                            const advBl = AdvDtls.data.getAdvocate.advBal;
                            const advStts = AdvDtls.data.getAdvocate.status;
                            const namesssssss = AdvDtls.data.getAdvocate.name;


                        
                      
                        const sendSMLn = async () => {
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try {
                            await API.graphql(
                              graphqlOperation(createSMLoansCovered, {
                                input: {
                                  

                                  loaneeid: RecNatId,
                                  loanerId: SenderNatId,
                                  loanerPhn:loanerEmail,
                                  loaneePhn: phonecontact,  
                                  loaneeEmail:loaneeEmail,
                                  loanerLoanee:userInfo.attributes.email+loaneeEmail,
                                  loanerLoaneeAdv:  userInfo.attributes.email+loaneeEmail+ AdvRegNo ,                          
                                  amountgiven: parseFloat(amount).toFixed(0),
                                  loaneename:namess,
                                  loanername:busName,
                                  amountexpected: TotalAmtExp2.toFixed(0),
                                  amountExpectedBackWthClrnc:TotalAmtExp2.toFixed(0),
                                  DefaultPenaltySM:defaultPenalty,
                                  DefaultPenaltySM2:0,
                                  interest:AmtExp,
                                  amountrepaid: 0,
                                  timeExpBack: parseFloat(RepaymtPeriod) + daysUpToDate,
                                  timeExpBack2: 61 + daysUpToDate,
                                  dfltUpdate: daysUpToDate,
                                  lonBala:TotalAmtExp2.toFixed(0),
                                  repaymentPeriod: RepaymtPeriod,
                                  advregnu: advLicNo,
                                  description: description,
                                  loanerEmail: loanerEmail,
                                  status: "LoanActive",
                                  owner: ownerzs,
                                  advEmail: advEmail
                                  
                                },
                              }),
                            );


                          } catch (error) {
                            console.log(error)
                            if(error){Alert.alert("Error!")
                          return;}
                          }
                          setIsLoading(false);
                          await updtSendrAc();
                        };

                        sendSMLn();

                        const updtSendrAc = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
                              await API.graphql(
                                graphqlOperation(updateAgent, {
                                  input:{
                                    BusKntct:loanerEmail,
                                                                      
                                    netEarnings:(parseFloat(SenderUsrBal)-TtlTransCost).toFixed(0) 
                                   
                                    
                                  }
                                })
                              )


                          }
                          catch(error){
                            console.log(error)
                            if (error){Alert.alert("Error!")
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
                                    awsemail:loaneeEmail,
                                    
                                    TtlActvLonsTmsLnrCov: parseFloat(TtlActvLonsTmsLnrCovs1)+1,
                                    TtlActvLonsAmtLnrCov: (parseFloat(TtlActvLonsAmtLnrCovs1) + TotalAmtExp).toFixed(0),
                                    balance:(parseFloat(RecUsrBal) + parseFloat(amount) ).toFixed(0) ,
                                    loanStatus:"LoanActive",                                    
                                    blStatus: "AccountNotBL",
                                    loanAcceptanceCode:"None"                                 
                                    
                                  }
                                })
                              )                              
                          }
                          catch(error){
                            console.log(error)
                            if (error){Alert.alert("Error!")
                            return;}
                          }
                          setIsLoading(false);
                          await updtComp();
                        }

                        const updtComp = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(false);
                          
                          try{
                              await API.graphql(
                                graphqlOperation(updateCompany, {
                                  input:{
                                    AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                        
                                    ttlCompCovEarnings:CompCovAmt + parseFloat(ttlCompCovEarningss),
                                    AdvEarningBal:AdvCovAmt + parseFloat(AdvEarningBals),                                                                                                                                                     
                                    AdvEarning:AdvCovAmt + parseFloat(AdvEarnings),
                                    companyEarningBal:CompanyTotalEarnings + parseFloat(companyEarningBals), 
                                    
                                    companyEarning: CompanyTotalEarnings + parseFloat(companyEarnings),                    
                                   
                                    ttlSMLnsInAmtCov: TotalAmtExp + parseFloat(ttlSMLnsInAmtCovs),
                                    
                                    ttlSMLnsInTymsCov: 1 + parseFloat(ttlSMLnsInTymsCovs),
                                    
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            console.log(error)
                            if (error){Alert.alert("Error!")
                        return;}
                          }
                          setIsLoading(false);
                          await updtAdv();
                        }

                        const updtAdv = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
                              await API.graphql(
                                graphqlOperation(updateAdvocate, {
                                  input:{
                                    advregnu: advLicNo,
                                    advBal: (AdvCovAmt + parseFloat(advBl)).toFixed(0) ,
                                    TtlEarnings:(AdvCovAmt + parseFloat(advTtlAern)).toFixed(0),                                 
                                    
                                  }
                                })
                              )
                          }
                          catch(error){
                            console.log(error)
                            if (error){Alert.alert("Error!")
      return;}
                          }
                          Alert.alert("Success. AdvocateFee:" +(parseFloat(CoverageFees)*parseFloat(amount)).toFixed(2) 
                          + ", TransactionFee:"+ (parseFloat(userLoanTransferFees)*parseFloat(amount)).toFixed(2)
                          );

                          
                          setIsLoading(false);
                          await updtRecAc3();
                        }


                        const updtRecAc3 = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
                              await API.graphql(
                                graphqlOperation(updateReqLoan, {
                                  input:{
                                    id:route.params.id,
                                    status:"Approved"                  
                                    
                                  }
                                })
                              )                              
                          }
                          catch(error){
                            console.log(error)
                            
                          }
                          Communications.textWithoutEncoding(phonecontact,'Hi '+ namess 
                          + ', you have been loaned Ksh. '+ amount +' by '
                        + busName + '. For clarification call the loaner: '
                        + userInfo.attributes.phone_number 
                        + '. The following is a break down of your repayable loan: '
                        + ' Amount debited into your main account is Ksh. '+ amount 
                        + '. Amount you had committed to repay is Ksh. '
                        + AmtExp + '. Transaction fee is Ksh. '
                        + lnTrnsfrFee + 
                        '. Advocacy fee is Ksh. '
                        + ttlCovFeeAmount + '. Total Repayable is Ksh '+ TotalAmtExp 
                        + '. Thank you. MiFedha.');
                          setIsLoading(false);
                          
                        }
                
                   
                      }
                      catch (e){
                        console.log(e)
                        if (e){Alert.alert("Error! No advocate involved during request")
                return;}
                      }
                      setIsLoading(false);
                    }


                    
                      if (parseFloat(usrNoBL) > parseFloat(maxBLss)){Alert.alert('Receiver adversely listed');
                      return;
                    }
                        

                    else if(parseFloat(ttlDpstSMs) === 0 && parseFloat(TtlWthdrwnSMs) ===0)
                    {Alert.alert('Loanee ID be verified through deposit at MFNdogo');}
                    else if(status === "Approved"){Alert.alert('Loan already granted');}
                   
                    else if(statusNumber === 0 && advLicNo != " " ){Alert.alert('Advocate has not yet witnessed');                  
                  }
                     
                    
                        
                        else if(userInfo.attributes.email === loaneeEmail){Alert.alert('You cannot Loan Yourself');}
                        else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');}
                        
                        else if (
                          parseFloat(SenderUsrBal) < TtlTransCost 
                        ) {Alert.alert("Cancelled."+ "Bal: "+ SenderUsrBal +". Deductable: " + TtlTransCost.toFixed(2) 
                        + ". "+ ((TtlTransCost) - parseFloat(SenderUsrBal)).toFixed(2) + ' more needed');}
                        
                        
                        
                        
                        
                       
                        else if (Lonees1.data.listSMLoansCovereds.items.length > 0 
                          ||
                          
                          Lonees3.data.listCovCreditSellers.items.length > 0 
                          ||
                          
                          Lonees5.data.listCvrdGroupLoans.items.length > 0 
                          
                          
    
                        
                          ) {
                            SndChmMmbrMny();
                        } 
                        
                        else if (advLicNo == "") {sendSMLn();}
                        else {
                         await fetchAdv ();
                        }                                           
                      }       
                    catch(e) {     
                      console.log(e)
                      if (e){Alert.alert("Error!")
      return;}                 
                    }
                    setIsLoading(false);
                    }                    
                      await fetchRecUsrDtls();        
                    

           

          
        
        } catch (e) {
          console.log(e)
          if (e){Alert.alert("Error!")
      return;}
        } 
        setIsLoading(false);       
      };
      await fetchCompDtls();
    
    } catch (e) {
      console.log(e)
      if (e){Alert.alert("Error!")
  return;}
    } 
    setIsLoading(false);       
  };
  await fetchSenderUsrDtls();


} catch (e) {
  console.log(e)
  if (e){Alert.alert("Error!")
return;}
} 
setIsLoading(false);       
};
await fetchBizDtls();

  

} catch (e) {
  console.log(e)
  if (e){Alert.alert("Error!")
return;}
} 
setIsLoading(false);       
};
await fetchLnReq();


}     
catch (e) {
  console.log(e)
  if (e){Alert.alert("Error!")
  return;}
     
}   
setIsLoading(false);
};

await fetchCLChm();



}     
catch (e) {
  console.log(e)
  if (e){Alert.alert("Error!")
  return;}
     
}   
setIsLoading(false);
};

await fetchCLCrdSl();


      
    } catch (e) {
      console.log(e)
      if (e){Alert.alert("Error!")
      return;}
  };
      setIsLoading(false);
      
      setAmount("");
     
      setAdvRegNo("");
      setAmtExp("");
      setDesc("");
      setSnderPW("");
      setRepaymtPeriod("");
      setRecAccCode("");
      
      setPwnBrkr("")
}

useEffect(() =>{
  const PwnBrkrs=PwnBrkr
    if(!PwnBrkrs && PwnBrkrs!=="")
    {
      setPwnBrkr("");
      return;
    }
    setPwnBrkr(PwnBrkrs);
    }, [PwnBrkr]
     );
     
     
     

     useEffect(() =>{
      const amt=amount
        if(!amt && amt!=="")
        {
          setAmount("");
          return;
        }
        setAmount(amt);
        }, [amount]
         );

         

             useEffect(() =>{
              const AdvRegNoss=AdvRegNo
                if(!AdvRegNoss && AdvRegNoss!=="")
                {
                  setAdvRegNo("");
                  return;
                }
                setAdvRegNo(AdvRegNoss);
                }, [AdvRegNo]
                 );

                 useEffect(() =>{
                  const AmtExpss=AmtExp
                    if(!AmtExpss && AmtExpss!=="")
                    {
                      setAmtExp("");
                      return;
                    }
                    setAmtExp(AmtExpss);
                    }, [AmtExp]
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
                              const RepaymtPeriods=RepaymtPeriod
                                if(!RepaymtPeriods && RepaymtPeriods!=="")
                                {
                                  setRepaymtPeriod("");
                                  return;
                                }
                                setRepaymtPeriod(RepaymtPeriods);
                                }, [RepaymtPeriod]
                                 );

                                 useEffect(() =>{
                                  const RecAccCodes=RecAccCode
                                    if(!RecAccCodes && RecAccCodes!=="")
                                    {
                                      setRecAccCode("");
                                      return;
                                    }
                                    setRecAccCode(RecAccCodes);
                                    }, [RecAccCode]
                                     );

  return (
    
      <View style={styles.image}>
        <ScrollView >
         
         <View style={styles.amountTitleView}>
           <Text style={styles.title}>Fill Loan Details Below</Text>
         </View>


         <TouchableOpacity
           onPress={fetchCvLnSM}
           style={styles.sendAmtButton}>
           <Text style={styles.sendAmtButtonText}>Click to loan</Text>
           {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
         </TouchableOpacity>

         
       </ScrollView>
      </View>
             
    
  );
};

export default SMASendLns;